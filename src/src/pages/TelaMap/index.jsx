import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import InputAutoComplete from "../../components/InputAutoComplete";
import MapViewDirections from "react-native-maps-directions";
import { useLoginReducer } from "../../reducer/inputReducer";
import { getCurrentGeolocation } from "../../services/googleMapsService";
import BasicButton from "../../components/BasicButton";
import { getPosition, traceRoute } from "./mapUtils"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import {
  Container,
  SearchContainer,
  Map,
  ShowRoutesButton,
  ShowRoutesButtonText,
  ResultsView,
  View,
  ResultsText,
  ErrorText,
  WayPointContainer,
  ButtonText,
  ActionRouteButton,
  RemoveWayPoint,
} from "./styles";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type Address = {
  street: string,
  coordinates?: {
    latitude: string,
    longitude: string
  }
};

export default function TelaMap() {
  const [origin, setOrigin] = useState({
    street: "origem",
    coordinates: null
  });
  const [wayPoints, setWayPoints] = useState([]);

  const [destination, setDestination] = useState({
    coordinates: null
  });

  const [fastestRoute, setFastestRoute] = useState([]);
  const [showDirection, setShowDirection] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const mapRef = useRef(null);

  const navigation = useNavigation();

  const [state, dispatch] = useLoginReducer(); // TODO: aparentemente esse é o ERROR

  useEffect(() => {
    async function requestLocationPermissions() {
      const { granted } = await requestForegroundPermissionsAsync();
      if (granted) {
        const currentposition = await getCurrentPositionAsync();
        const streetAddress = await getCurrentGeolocation(currentposition.coords.latitude, currentposition.coords.longitude)
        setOrigin({
          street: streetAddress,
          coordinates: {
            latitude: currentposition.coords.latitude,
            longitude: currentposition.coords.longitude
          }
        });
      }
    }
    requestLocationPermissions();

  }, []);

  useEffect(() => {
    console.log(">> wayPoints")
    console.log(wayPoints)
    console.log(wayPoints.length)
  }, [wayPoints]);

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current.animateCamera(camera, { duration: 1000 });
    }
  };

  // const traceRouteOnReady = (args) => {
  //   if (args) {
  //     setDistance(args.distance);
  //     setDuration(args.duration);
  //   }
  // };

  const drawRoute = async () => {
    const { coordinates, distance } = await traceRoute(origin, destination, wayPoints)

    if(coordinates && distance){
      setShowDirection(true);
      setFastestRoute(coordinates);
      setDistance(distance);
  
      mapRef.current?.fitToCoordinates(fastestRoute, {
        edgePadding: {
          top: 370,
          right: 60,
          bottom: 40,
          left: 60,
        },
      });
    }
    // TODO: error catcher
  };
  
  const handleSetNewWayPoints = () => {
    console.log("====== handleSetNewWayPoints")
    setWayPoints([
      ...wayPoints,
      {
        key: wayPoints.length++,
      }
    ])
  }

  const handleRemoveWayPoints = (key) => {
    setWayPoints([
      ...wayPoints.filter(x => x.key != key)
    ])
  }

  const onPlaceSelected = (details, fnc) => {
    const position = getPosition(details)
    fnc({
      coordinates: position
    })
    moveTo(position);
  };

  const onWayPointSelected = (wayPoint, details) => {
    const position = getPosition(details)
    console.log(wayPoint)
    wayPoints.filter(x => x.key === wayPoint.key).map(x => x.coordinates = position)
    setWayPoints([
      ...wayPoints,
    ])
    moveTo(position);
  };


  return (
    <Container>
      <StatusBar style="dark" />

      <Map
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        loadingEnabled
        initialRegion={
          origin.coordinates && {
            latitude: origin.coordinates.latitude,
            longitude: origin.coordinates.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        }
      >
        {origin.coordinates != null ? <Marker coordinate={origin.coordinates} /> : null}
        {destination.coordinates != null ? <Marker coordinate={destination.coordinates} /> : null}
        {
          wayPoints.length > 0 ? 
          wayPoints.map(wayPoint => wayPoint.coordinates ?
            (
            <Marker coordinate={wayPoint.coordinates} />
            ) : null
          )
          : null
        }

        {/* {(showDirection &&
          destination01 &&
          destination03 &&     
          destination02) &&(
            <MapViewDirections
              origin={destination01}
              destination={destination03}
              waypoints={[destination02]}
              apikey={"AIzaSyA9gDzEJ-0yzGfVKvC82X7gfK2G8S2RIs8"}
              strokeWidth={3}
              strokeColor="hotpink"
              onReady={traceRouteOnReady}
            />
          )} */}

        {fastestRoute && (
          <Polyline
            coordinates={fastestRoute}
            strokeColor="#FF0000"
            strokeWidth={3}
          />
        )}
      </Map>

      <SearchContainer>
        <AntDesign
          name="arrowleft"
          size={35}
          color="#1C2120"
          onPress={() => navigation.navigate("Home")}
        />
        
      {
        origin.coordinates ? 

        <WayPointContainer>
          <View>
            <InputAutoComplete
              placeholder={origin.street}
              label={"Origem"}
              onPlacedSelected={(details) =>
                onPlaceSelected(details, setOrigin)
              }
            />
          </View>
          <ActionRouteButton onPress={() => handleSetNewWayPoints()}>
            <ButtonText>+</ButtonText>
          </ActionRouteButton>
        </WayPointContainer>
        : null
      }

      {/* PARADAS ===================================  */}
      {
        wayPoints.map(wayPoint => (
          <WayPointContainer>
            <View>
              <InputAutoComplete
                  key={wayPoint.key}
                  placeholder="Digite sua parada"
                  label={"Parada"}
                  onPlacedSelected={(details) =>
                    onWayPointSelected(wayPoint, details)
                  }
                />
              </View>
              <ActionRouteButton onPress={() => handleRemoveWayPoints(wayPoint.key)}>
                <ButtonText>-</ButtonText>
              </ActionRouteButton>
          </WayPointContainer>
        ))
      }

      {/* DESTINO =================================== */}
        <InputAutoComplete
          placeholder="Digite seu destino"
          label={"Destino"}
          onPlacedSelected={(details) =>
            onPlaceSelected(details, setDestination)
          }
        />

        
        {distance ? (
          <ResultsView>
            <ResultsText>
              Distância da rota mais rápida {distance / 1000} Km
            </ResultsText>
            {/* <ResultsText>Duração: {Math.ceil(duration)} min</ResultsText> */}
          </ResultsView>
        ) : (
          <ErrorText>{state}</ErrorText>
        )}

        <ShowRoutesButton onPress={drawRoute}>
          <FontAwesome5
            name="route"
            size={25}
            color="#1C2120"
            onPress={() => {}}
          />
          <ShowRoutesButtonText>Calcular rotas</ShowRoutesButtonText>
        </ShowRoutesButton>
      </SearchContainer>

      <TouchableOpacity
        onPress={async () => {
          const camera = await mapRef.current?.getCamera();
          if (camera) {
            const position = {
              latitude: origin.coordinates.latitude,
              longitude: origin.coordinates.longitude,
            };
            camera.center = position;
            mapRef.current.animateCamera(camera, { duration: 1000 });
          }
        }}
        style={{
          position: "absolute",
          bottom: 20,
        }}
      >
        <MaterialIcons name="gps-fixed" size={40} color="#1C2120" />
      </TouchableOpacity>
    </Container>
  );
}

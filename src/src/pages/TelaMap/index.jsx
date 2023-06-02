import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import InputAutoComplete from "../../components/InputAutoComplete";
import MapViewDirections from "react-native-maps-directions";
import { useLoginReducer } from "../../reducer/inputReducer";
import { getGeolocation } from "../../services/getGeolocation";
import polyline from "@mapbox/polyline";

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
  ResultsText,
  ErrorText,
} from "./styles";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function TelaMap() {
  const [location, setLocation] = useState(null);
  const [destination01, setDestination01] = useState(null);
  const [destination02, setDestination02] = useState(null);
  const [destination03, setDestination03] = useState(null);
  const [fastestRoute, setFastestRoute] = useState([]);
  const [showDirection, setShowDirection] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const mapRef = useRef(null);

  const navigation = useNavigation();

  const [state, dispatch] = useLoginReducer();

  useEffect(() => {
    async function requestLocationPermissions() {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const currentposition = await getCurrentPositionAsync();
        setLocation(currentposition);
      }
    }

    requestLocationPermissions();
  }, []);

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

  const formatCoordinates = (data) => {
    const { latitude, longitude } = data;
    return `${latitude},${longitude}`;
  };

  const traceRoute = async () => {
    if (destination01 && destination02 && destination03) {
      setShowDirection(true);

      const destination01Formated = formatCoordinates(destination01);
      const destination02Formated = formatCoordinates(destination02);
      const destination03Formated = formatCoordinates(destination03);

      try {
        const { distance, fastest_Route } = await getGeolocation(
          destination01Formated,
          destination02Formated,
          destination03Formated
        );

        const decodedPolyline = polyline.decode(
          fastest_Route.overview_polyline.points
        );
        const coordinates = decodedPolyline.map(([latitude, longitude]) => ({
          latitude,
          longitude,
        }));

        setFastestRoute(coordinates);
        setDistance(distance);
        console.log(decodedPolyline)

        mapRef.current?.fitToCoordinates(fastestRoute, {
          edgePadding: {
            top: 370,
            right: 60,
            bottom: 40,
            left: 60,
          },
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      dispatch({type: "MESSAGE03"})
    }
  };

  const onPlaceSelected = (details, flag) => {
    const set =
      flag === "destination01"
        ? setDestination01
        : flag === "destination02"
        ? setDestination02
        : setDestination03;

    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };

    set(position);
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
          location && {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        }
      >
        {destination01 && <Marker coordinate={destination01} />}
        {destination02 && <Marker coordinate={destination02} />}
        {destination03 && <Marker coordinate={destination03} />}

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
        <InputAutoComplete
          placeholder="origem"
          label={"Origem"}
          onPlacedSelected={(details) =>
            onPlaceSelected(details, "destination01")
          }
        />

        <InputAutoComplete
          placeholder="escreva segundo destino"
          label={"Destino"}
          onPlacedSelected={(details) =>
            onPlaceSelected(details, "destination02")
          }
        />

        <InputAutoComplete
          placeholder="escreva o destino"
          label={"Destino 2"}
          onPlacedSelected={(details) => {
            onPlaceSelected(details, "destination03");
          }}
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

        <ShowRoutesButton onPress={traceRoute}>
          <FontAwesome5
            name="route"
            size={25}
            color="#1C2120"
            onPress={() => {}}
            // style={{ alignSelf: "flex-end", marginTop: 6 }}
          />
          <ShowRoutesButtonText>Calcular rotas</ShowRoutesButtonText>
        </ShowRoutesButton>
      </SearchContainer>

      <TouchableOpacity
        onPress={async () => {
          const camera = await mapRef.current?.getCamera();
          if (camera) {
            const position = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
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

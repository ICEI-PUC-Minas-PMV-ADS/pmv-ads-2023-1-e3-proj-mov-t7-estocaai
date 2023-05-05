import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import InputAutoComplete from "../../components/InputAutoComplete";
import MapViewDirections from "react-native-maps-directions";

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
} from "./styles";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function TelaMap() {
  const [location, setLocation] = useState(null);
  const [origim, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showDirection, setShowDirection] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const mapRef = useRef(null);

  const navigation = useNavigation();

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

  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origim && destination) {
      setShowDirection(true);
      mapRef.current?.fitToCoordinates([origim, destination], {
        edgePadding: {
          top: 360,
          right: 60,
          bottom: 60,
          left: 60,
        },
      });
    }
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origim" ? setOrigin : setDestination;

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
        {origim && <Marker coordinate={origim} />}
        {destination && <Marker coordinate={destination} />}

        {showDirection && origim && destination && (
          <MapViewDirections
            origin={origim}
            destination={destination}
            // waypoints={[destination]}
            apikey={"AIzaSyCDBuSjb55C4-2oRvEtx77zEiydMKw9V3g"}
            strokeWidth={3}
            strokeColor="hotpink"
            onReady={traceRouteOnReady}
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
          onPlacedSelected={(details) => onPlaceSelected(details, "origim")}
        />

        <InputAutoComplete
          placeholder="escreva o destino"
          label={"Destino "}
          onPlacedSelected={(details) => {
            onPlaceSelected(details, "destination2");
          }}
        />

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

        {distance && duration ? (
          <ResultsView>
            <ResultsText>Distância: {distance.toFixed(2)} Km</ResultsText>
            <ResultsText>Duração: {Math.ceil(duration)} min</ResultsText>
          </ResultsView>
        ) : null}
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

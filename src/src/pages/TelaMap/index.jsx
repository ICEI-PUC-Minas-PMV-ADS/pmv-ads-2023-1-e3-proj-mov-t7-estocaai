import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Dimensions, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import InputAutoComplete from "../../components/InputAutoComplete";

import { Container, SearchContainer, TextWaiting, Map } from "./styles";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function TelaMap() {
  const [location, setLocation] = useState(null);
  const [origim, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [destination2, setDestination2] = useState("");

  const mapRef = useRef(null);

  const navigation = useNavigation();

  useEffect(() => {
    async function requestLocationPermissions() {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const currentposition = await getCurrentPositionAsync();
        console.log(currentposition);
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

  const onPlaceSelected = (details, flag) => {
    const set =
      flag === "origim"
        ? setOrigin
        : flag === "destination"
        ? setDestination
        : setDestination2;
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
        {destination2 && <Marker coordinate={destination2} />}
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
          placeholder="escreva o primeiro destino"
          label={"Destino 1"}
          onPlacedSelected={(details) =>
            onPlaceSelected(details, "destination")
          }
        />

        <InputAutoComplete
          placeholder="escreva o segundo destino"
          label={"Destino 2"}
          onPlacedSelected={(details) => {
            onPlaceSelected(details, "destination2");
          }}
        />
      </SearchContainer>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { PROVIDER_GOOGLE } from "react-native-maps";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { Container, TextWaiting, Map } from "./styles";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function TelaMap() {
  const [location, setLocation] = useState(null);

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

  if (!location) {
    return (
      <Container style={{ flex: 1 }}>
        <TextWaiting>Aguarde, obtendo localização...</TextWaiting>
        <ActivityIndicator size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <StatusBar style="dark" />

      {/* <Entypo
        name="arrow-left"
        size={35}
        color="#fff"
        onPress={() => navigation.navigate("Home")}
        
      /> */}

      <Map
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      />

    </Container>
  );
}

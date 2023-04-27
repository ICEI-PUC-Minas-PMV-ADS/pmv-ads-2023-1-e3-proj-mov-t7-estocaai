import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";

import Home from "./pages/Home";
import TelaPerfil from "./pages/TelaPerfil";
import TelaMap from "./pages/TelaMap";

const { Screen, Navigator } = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="location"
              size={35}
              color={focused ? "#1C2120" : "gray"}
            />
          ),
          tabBarLabel: "",
          tabBarStyle: { display: "none" },
          // tabBarIconStyle: { marginTop: 4 },
        }}
        name="TelaMap"
        component={TelaMap}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={35}
              color={focused ? "#1C2120" : "gray"}
            />
          ),
          tabBarLabel: "",
          // tabBarIconStyle: { marginTop: 4 },
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-alt"
              size={30}
              color={focused ? "#1C2120" : "gray"}
            />
          ),
          tabBarLabel: "",
          // tabBarIconStyle: { marginTop: 4 },
        }}
        name="TelaPerfil"
        component={TelaPerfil}
      />
    </Navigator>
  );
}

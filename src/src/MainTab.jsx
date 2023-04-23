import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo} from "@expo/vector-icons";

import Home from "./pages/Home";

const { Screen, Navigator } = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({focused}) => (
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
    </Navigator>
  );
}

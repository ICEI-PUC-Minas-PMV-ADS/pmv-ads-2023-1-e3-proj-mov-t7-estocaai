import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./pages/TelaInicial/App";
import TelaLogin from "./pages/TelaLogin/App";
import { TelaSignUp } from "./pages/TelaSignUp";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="TelaInicial"
      >
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaSignUp" component={TelaSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

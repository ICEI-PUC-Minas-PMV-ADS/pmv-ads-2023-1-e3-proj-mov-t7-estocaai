import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Container, Label, Input } from "./styles";

export default function SignInput({
  icon, 
  label, 
  password,
  onChangeText,
  value,
  placeholcer
}) {
  return (
    <>
      <Label>{label}</Label>
      <Container>
        <Ionicons name={icon} size={20} color="black" />
        <Input 
          required
          secureTextEntry={password}
          placeholcer={placeholcer}
          value={value}
          onChangeText={onChangeText}
        />
      </Container>
    </>
  );
}

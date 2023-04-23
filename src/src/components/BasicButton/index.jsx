import React from "react";
import { Button, ButtonText } from "./styles";

export default function BasicButton({ onPress, text }) {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}

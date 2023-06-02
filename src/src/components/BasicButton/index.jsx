import React from "react";
import { Button, ButtonText } from "./styles";

export default function BasicButton({ onPress, text, teste }) {
  return (
    <Button style={teste ? {marginTop: 20} : {}} onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}

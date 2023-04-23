import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo.png";
import coverImg from "../../assets/cover.png";

import SignInput from "../../components/SignInput";
import BasicButton from "../../components/BasicButton";

import {
  Container,
  EstocaAiLogo,
  ContentWrapper,
  WelcomeText,
  UserName,
  Header,
  TextContainer,
  InputAddressText,
  ButtonContainer
} from "./styles";

export default function TelaInicial() {
  const [address, setAddress] = useState("");

  const navigation = useNavigation();

  return (
    <Container source={coverImg}>
      <StatusBar style="light" />
      <Header>
        <EstocaAiLogo source={logo} />

        <TextContainer>
          <WelcomeText>Bem-vindo</WelcomeText>
          <UserName>fulano</UserName>
        </TextContainer>
      </Header>

      <ContentWrapper>
        <InputAddressText>Insira um endereço</InputAddressText>

        <SignInput
          icon="map"
          placeholcer="digite um endereço"
          label="Endereço"
        />

        <ButtonContainer>
          <BasicButton onPress={() => {}} text="Cadastrar" />

          <BasicButton onPress={() => {}} text="Calcular" />
        </ButtonContainer>
      </ContentWrapper>
    </Container>
  );
}

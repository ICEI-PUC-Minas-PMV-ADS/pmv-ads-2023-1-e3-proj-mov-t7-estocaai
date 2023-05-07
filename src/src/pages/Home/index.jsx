import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo.png";
import coverImg from "../../assets/cover.png";

import SignInput from "../../components/SignInput";
import BasicButton from "../../components/BasicButton";
import { cadastrarEnderecoBancoDeDados } from "../../services/Endereco";

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
import { getUser } from "../../services/authorizationService"


export default function TelaInicial() {
  const [address, setAddress] = useState("");
  const [valorEndereco, setValorEndereco] = useState("");
  const [valorCep, setValorCep] = useState("");

  const currentUser = getUser()

  const navigation = useNavigation();

  const cadastrar = () => {
    cadastrarEnderecoBancoDeDados(valorCep,valorEndereco)
  
  }
  const cadastrarValorCep = (valorCep) =>
  {
    setValorCep(valorCep)
  }
  const cadastrarValorEndereco= (valorCep) =>
  {
    setValorEndereco(valorCep)
  }

  return (
    <Container source={coverImg}>
      <StatusBar style="light" />
      <Header>
        <EstocaAiLogo source={logo} />

        <TextContainer>
          <WelcomeText>Bem-vindo</WelcomeText>
          <UserName>{currentUser.name}</UserName>
        </TextContainer>
      </Header>

      <ContentWrapper>
        <InputAddressText>Insira um endereço</InputAddressText>

        <SignInput
          icon="map"
          placeholcer="Digite o CEP"
          label="Cep"
          onChangeText={(valor) => cadastrarValorCep(valor)}
        />
        <SignInput
          icon="map"
          placeholcer="Digite o número."
          label="Número"
          onChangeText={(valor) => cadastrarValorEndereco(valor)}
        />

        <ButtonContainer>
          <BasicButton onPress={() => cadastrar()} text="Cadastrar" />
        </ButtonContainer>
      </ContentWrapper>
    </Container>
  );
}

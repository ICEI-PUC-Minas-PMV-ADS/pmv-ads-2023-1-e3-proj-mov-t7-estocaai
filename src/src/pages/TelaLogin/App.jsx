import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";

import { Container, 
  EstocaAiLogo, 
  ContentWrapper,
  LoginText,
  Button,
  ButtonText,
  SmallText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonBold 
} from "./styles";

import coverImg from '../../assets/cover.png';
import logo from '../../assets/logo.png';

import SignInput from "../../components/SignInput";


export default function TelaLogin() {

  const [userField, setUserField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
    <Container source={coverImg}>
      <StatusBar  
        style='light' 
        
      />
      <EstocaAiLogo source={logo}/>
      <ContentWrapper>
        <LoginText>Login</LoginText>
        <SmallText>Sing in para continuar</SmallText>

        <SignInput 
          icon="ios-person"
          label="cnpj"
          placeholcer={"Digite seu CNPJ"}
          value={userField}
          onChangeText={t=>setUserField(t)}
        />
        <SignInput 
          icon="ios-key"
          placeholcer={"Digite sua senha"}
          label="senha"
          password={true}
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
        />

        <Button onPress={() => {}}>
          <ButtonText>LOGIN</ButtonText>
        </Button>

        <SignMessageButton onPress={() => {}}>
          <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
          <SignMessageButtonBold>Cadastre-se!</SignMessageButtonBold>
        </SignMessageButton>
      </ContentWrapper>
    </Container>
  );
}

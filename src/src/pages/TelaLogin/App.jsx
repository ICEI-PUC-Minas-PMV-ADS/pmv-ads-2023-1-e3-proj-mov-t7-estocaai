import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from "@expo/vector-icons";
import { Text } from 'react-native';

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
import { useNavigation } from "@react-navigation/native";
import { doLogin } from "../../services/authorizationService"


export default function TelaLogin() {
  
  const [userField, setUserField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [erroMessage, setErroMessage] = useState(null);
  
  const navigation = useNavigation();
  const chamarTab = () =>
  {
    const result = doLogin(userField, passwordField)
    console.log(`result`)
    console.log(result)
    if(result){
      navigation.navigate('MainTab');
    }else{
      setErroMessage('Credenciais Inválidas');
    }
  }
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

        <Button onPress={() => chamarTab()}>
          <ButtonText>LOGIN</ButtonText>
        </Button>
        <Text>{erroMessage}</Text>
        <SignMessageButton onPress={() => navigation.reset({routes: [{name: "TelaSignUp"}]})}>
          <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
          <SignMessageButtonBold>Cadastre-se!</SignMessageButtonBold>
        </SignMessageButton>
      </ContentWrapper>
    </Container>
  );
}

import React,{useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { Container, EstocaAiLogo, LoadingIcon } from "./styles";
import coverImg from '../../assets/cover.png';
import logo from '../../assets/logo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function TelaInicial({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TelaLogin');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const chamarTab = () =>
  {
    navigation.navigate('MainTab');
  }
  return (
    <Container source={coverImg}>
      <StatusBar  
        style='light' 
        
      />
      
      <EstocaAiLogo source={logo} resizeMode="contain"/>
      {/* <Button onPress={() => chamarTab()}>
          <ButtonText>Entrar</ButtonText>
        </Button> */}
      <LoadingIcon  size="large" color="#ffffff"/>
    </Container>
  );
}

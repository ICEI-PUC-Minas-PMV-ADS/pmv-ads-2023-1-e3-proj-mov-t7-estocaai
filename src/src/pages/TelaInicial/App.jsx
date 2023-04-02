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
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container source={coverImg}>
      <StatusBar  
        style='light' 
        
      />
      
      <EstocaAiLogo source={logo} resizeMode="contain"/>

      <LoadingIcon  size="large" color="#ffffff"/>
    </Container>
  );
}

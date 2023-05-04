import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 60px;

`;

export const EstocaAiLogo = styled.Image`
  width: 90%;
`;

export const TextContainer = styled.View`
  width: 100%;
  margin-left: 60px;
`;

export const WelcomeText = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  font-style: italic;
`;

export const UserName = styled.Text`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  font-style: italic;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  bottom: 0;
  padding: 40px;
  width: 100%;
  background-color: #f1f1f1;
  height: 59%;
  border-top-right-radius: 80px;
`;

export const InputAddressText = styled.Text`
  text-align: center;
  font-size: 35px;
  color: #2A364E;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
  flex: 1;
  justify-content: space-around;
`;
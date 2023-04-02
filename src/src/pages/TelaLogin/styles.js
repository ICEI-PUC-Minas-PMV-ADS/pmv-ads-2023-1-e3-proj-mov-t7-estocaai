import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const EstocaAiLogo = styled.Image`
  width: 80%;
  margin-top: 120px;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  bottom: 0;
  padding: 40px;
  width: 100%;
  background-color: #F1F1F1;
  height: 478px;
  border-top-right-radius: 80;
`;

export const LoginText = styled.Text`
  font-size: 37px;
  font-weight: bold;
  color: #212625;
  text-align: center;
`;

export const SmallText = styled.Text`
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
  margin-bottom: 4px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #1C2120;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #212625;
`;

export const SignMessageButtonBold = styled.Text`
  font-size: 16px;
  color: #212625;
  font-weight: bold;
  margin-left: 5px;
`;

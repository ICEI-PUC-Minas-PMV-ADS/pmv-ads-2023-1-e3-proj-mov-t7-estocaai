import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  bottom: 0;
  padding: 40px;
  width: 100%;
  background-color: #F1F1F1;
  height: 650px;
  border-top-left-radius: 80px;
`;

export const LoginText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #212625;
  text-align: center;
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
  margin-top: 20px;
  margin-bottom: 30px;
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

import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 40px;
  color: #fff;
  margin-top: 50px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  bottom: 0;
  padding: 10px;
  width: 100%;
  background-color: #F1F1F1;
  height: 600px;
  border-top-left-radius: 80px;
  padding-top: 60px
`;

export const PhotoWrapper = styled.View`
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const PhotoDefault = styled.Image`
 align-self: center;
`;


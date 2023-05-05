import styled from "styled-components/native";
import MapView from "react-native-maps";
import Constants from "expo-constants";

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const TextWaiting = styled.Text`
  font-size: 20px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const SearchContainer = styled.View`
  position: absolute;
  width: 90%;
  background-color: #F1F1F1;
  /* shadowColor: #1C2120;
  shadowOffset: {width: 2; height: 2};
  shadowOpacity: 0.5;
  showRadius: 4; */
  elevation: 4;
  padding: 8px;
  border-radius: 8px;
  top: ${Constants.statusBarHeight}px;
`;


// export const GooglePlacesAutocompleteElement = styled(GooglePlacesAutocomplete)`

// `;

export const ShowRoutesButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #F1F1F9;
  width: 200px;
  align-self: flex-end;
  justify-content: center;
`;
export const ShowRoutesButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
margin-left: 10px;
`;

export const ResultsView = styled.View`
`;

export const ResultsText = styled.Text`
  font-size: 15px;
`;
import React from 'react';
import { Text } from 'react-native';
import { GOOGLE_MAPS_API_KEY } from "../../constants"

import {
  GooglePlacesAutocompleteElement
} from './styles';

export default function InputAutoComplete({
  label,
  placeholder,
  onPlacedSelected
}){
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocompleteElement
          placeholder={placeholder || ""}
          onPress={(data, details = null) => {
            onPlacedSelected( details);
          }}
          fetchDetails
          styles={{
            textInputContainer: {
            },
            // container: {
            //   flex: 1,
            //   width: "85%"
            // },
            textInput: {
              height: 38,
              width: 20,
              fontSize: 16,
            },
          }}
          query={{
            key: "AIzaSyA9gDzEJ-0yzGfVKvC82X7gfK2G8S2RIs8",
            language: "pt-BR",
          }}
        />
    </>
  );
}
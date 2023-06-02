import React from 'react';
import { Text } from 'react-native';

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
          query={{
            key: "AIzaSyA9gDzEJ-0yzGfVKvC82X7gfK2G8S2RIs8",
            language: "pt-BR",
          }}
        />
    </>
  );
}
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
            key: "AIzaSyAopPeYEVeSdCuZf2wvFn1s10lOuLMNJ8M",
            language: "pt-BR",
          }}
        />
    </>
  );
}
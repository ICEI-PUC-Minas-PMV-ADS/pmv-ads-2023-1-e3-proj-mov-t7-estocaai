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
            key: "AIzaSyCDBuSjb55C4-2oRvEtx77zEiydMKw9V3g",
            language: "pt-BR",
          }}
        />
    </>
  );
}
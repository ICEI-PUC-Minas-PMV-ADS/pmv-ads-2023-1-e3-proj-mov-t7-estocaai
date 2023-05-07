import React, { useState } from "react";

import coverImg from "../../assets/cover.png";
import photo from "../../assets/photo.png";

import SignInput from "../../components/SignInput";
import BasicButton from "../../components/BasicButton";

import { obterEnderecos } from "../../services/Endereco";

import {
  Container,
  Text,
  ContentWrapper,
  PhotoWrapper,
  PhotoDefault,
  Scroll,
} from "./styles";

export default function TelaPerfil() {
  const [form, setForm] = useState({
    name: "",
    cnpj: "",
    email: "",
  });

  const handleInputChange = (fieldName, value) => {
    setForm({ ...form, [fieldName]: value });
    console.log(form);
  };

  const atualizar = () => {
     obterEnderecos(); 
  }
  
  return (
    <Container source={coverImg}>
      <Text>Perfil</Text>

      <ContentWrapper>
        <PhotoWrapper>
          <PhotoDefault source={photo} resizeMode="cover" />
        </PhotoWrapper>

        <Scroll>
          <SignInput
            icon="ios-person"
            label="Nome social"
            placeholcer={"nome social"}
            value={form.name}
            onChangeText={(t) => handleInputChange("name", t)}
            isSetting
          />

          <SignInput
            icon="person-outline"
            placeholcer={"cnpj"}
            label="cnpj"
            value={form.cnpj}
            onChangeText={(t) => handleInputChange("cnpj", t)}
            isSetting
          />

          <SignInput
            icon="mail-outline"
            placeholcer={"E-mail"}
            label="e-mail"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(t) => handleInputChange("email", t)}
            isSetting
          />

          <BasicButton onPress={() => atualizar()} text="Atualizar" teste />

          {/* <View style={{marginBottom: 40}}></View> */}
        </Scroll>
      </ContentWrapper>
    </Container>
  );
}

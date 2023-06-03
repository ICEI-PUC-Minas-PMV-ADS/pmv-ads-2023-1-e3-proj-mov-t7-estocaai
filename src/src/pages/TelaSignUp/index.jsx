import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import coverImg from "../../assets/cover.png";

import SignInput from "../../components/SignInput";
import { useNavigation } from "@react-navigation/native";

import { useLoginReducer } from "../../reducer/inputReducer";

import {
  Container,
  ContentWrapper,
  LoginText,
  Button,
  ButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonBold,
  ErrorText,
} from "./styles";

import { createUser } from "../../services/authorizationService";

export function TelaSignUp() {
  const [form, setForm] = useState({
    name: "",
    cnpj: "",
    email: "",
    password: "",
  });

  const [state, dispatch] = useLoginReducer();

  const navigation = useNavigation();

  const handleInputChange = (fieldName, value) => {
    setForm({ ...form, [fieldName]: value });
    // console.log(form);
  };

  const doSignUp = () => {
    const formValue = Object.values(form);
    const allFieldsEmpty = formValue.some((value) => value === "");
    if (allFieldsEmpty) {
      dispatch({ type: "MESSAGE01" });
      return;
    }

    console.log("sending cadastro");
    createUser(form);
    navigation.navigate("TelaLogin");
  };

  return (
    <Container source={coverImg}>
      <StatusBar style="light" />

      <ContentWrapper>
        <LoginText>Crie uma conta</LoginText>
        <SignMessageButton
          onPress={() =>
            navigation.reset({
              routes: [{ name: "TelaLogin" }],
            })
          }
        >
          <SignMessageButtonText>Já possui cadastro?</SignMessageButtonText>
          <SignMessageButtonBold>Login in!</SignMessageButtonBold>
        </SignMessageButton>

        <SignInput
          icon="ios-person"
          label="Nome social"
          placeholcer={"Digite seu nome social"}
          value={form.name}
          onChangeText={(t) => handleInputChange("name", t)}
        />

        <SignInput
          icon="person-outline"
          placeholcer={"Digite seu cnpj"}
          label="cnpj"
          value={form.cnpj}
          onChangeText={(t) => handleInputChange("cnpj", t)}
        />

        <SignInput
          icon="mail-outline"
          placeholcer={"Digite seu e-mail"}
          label="e-mail"
          value={form.email}
          keyboardType="email-address"
          onChangeText={(t) => handleInputChange("email", t)}
        />

        <SignInput
          icon="ios-key"
          placeholcer={"Digite sua senha"}
          label="password"
          password={true}
          value={form.password}
          onChangeText={(t) => handleInputChange("password", t)}
        />

        <Button onPress={() => doSignUp()}>
          <ButtonText>Cadastro</ButtonText>
        </Button>
        {state && <ErrorText>{state}</ErrorText>}
      </ContentWrapper>
    </Container>
  );
}

import React, { useState } from "react";
import TextComponent from "../TextComponent";
import { AuxDiv, ContainerForm } from "./styles";
import InputText from "../InputText";

export default function FormComponent({ onClick }) {
  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  return (
    <ContainerForm>
      <InputText
        placeholder="Rua"
        onChange={(e) => { setStreet(e.target.value) }}
      />
      <AuxDiv>
        <InputText
          placeholder="Número"
          onChange={(e) => { setNumber(e.target.value) }}
        />
        <InputText
          placeholder="Bairro"
          onChange={(e) => { setNeighborhood(e.target.value) }}
        />
      </AuxDiv>
      <InputText
        placeholder="Cidade"
        onChange={(e) => { setCity(e.target.value) }}
      />
      <InputText
        placeholder="Estado"
        onChange={(e) => { setState(e.target.value) }}
      />
      <InputText
        placeholder="País"
        onChange={(e) => { setCountry(e.target.value) }}
      />
    </ContainerForm>
  );
}


import React, { useState } from "react";
import { ContainerForm, ContainerInputs } from "./styles";
import InputMars from "../InputMars";
import TextComponent from "../TextComponent";

export default function FormMars({ onClick }) {

  const [allotment, setAllotment] = useState([]);
  return (
    <ContainerForm>
      <TextComponent sizeResponsive='0.6rem' size='0.8rem' text=' Digite os 4 dígitos que representam a sua localização ' />
      <ContainerInputs>
        <InputMars
          width='2.5rem'
          height='2.5rem'
          onChange={(e) => { setAllotment(e.target.value) }}
        />
        <InputMars
          width='2.5rem'
          height='2.5rem'
          onChange={(e) => { setAllotment(...e.target.value) }}
        />
        <InputMars
          width='2.5rem'
          height='2.5rem'
          onChange={(e) => { setAllotment(...e.target.value) }}
        />
        <InputMars
          width='2.5rem'
          height='2.5rem'
          onChange={(e) => { setAllotment(...e.target.value) }}
        />
      </ContainerInputs>
    </ContainerForm>
  );
}


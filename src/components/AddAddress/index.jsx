import React, { useState } from "react";
import NavBar from "../NavBarComponent";
import { ContainerBodyAdd} from "./styles";
import FormComponent from "../FormComponent";

export default function AddAddress({ handleClick }) {

  return (
    <>
      <NavBar handleClick={handleClick} text='Cadastre um novo endereço' />
      <ContainerBodyAdd>
          <FormComponent />
      </ContainerBodyAdd>

    </>
  );
}
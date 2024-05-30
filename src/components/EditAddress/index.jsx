import React, { useState } from "react";
import NavBar from "../NavBarComponent";
import { ContainerBodyEdit, Label, Option, TypeSelect } from "./styles";
import FormComponent from "../FormComponent";

export default function EditAddress({ handleClick }) {

  return (
    <>
      <NavBar handleClick={handleClick} text='Edite o seu endereço' />
      <ContainerBodyEdit>
       <FormComponent />
      </ContainerBodyEdit>

    </>
  );
}
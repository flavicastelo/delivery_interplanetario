import React, { useState } from "react";
import NavBar from "../NavBarComponent";
import { ContainerBodyAdd, ContainerMars, Label, Option, TypeSelect } from "./styles";
import FormComponent from "../FormComponent";
import TextComponent from "../TextComponent";
import InputText from "../InputText";
import FormMars from "../FormMars";
import ButtonComponent from "../ButtonComponent";

export default function AddAdress({ handleClick }) {
  const [type, setType] = useState();

  const [selectedPlanet, setSelectedPlanet] = useState('Terra');

  const handleChange = (e) => {
    setSelectedPlanet(e.target.value);
  };

  const handleSubmit = () => {
    e.preventDefault();
  }
  return (
    <>
      <NavBar handleClick={handleClick} text='Cadastre um novo endereço' />
      <ContainerBodyAdd>
        <Label for='type'>
          <TextComponent text='Escolha seu planeta:' />
        </Label>
        <TypeSelect value={selectedPlanet} onChange={handleChange} id="type" name='type'>
          <Option value='Terra'>Terra</Option>
          <Option value='Marte'>Marte</Option>
        </TypeSelect>
        {selectedPlanet === 'Terra' ? <FormComponent /> : <FormMars />}
        <ButtonComponent size='auto' text="Enviar" />
      </ContainerBodyAdd>

    </>
  );
}
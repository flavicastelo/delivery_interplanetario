import React, { useState } from "react";
import NavBar from "../NavBarComponent";
import { ContainerBody, ImageStyle, ContainerImg, ContainerForm, HeaderComponent } from "./styles";
import { useNavigate } from "react-router-dom";
import TextComponent from "../TextComponent";
import ToggleTheme from "../ToggleTheme";
import Logo from "../Logo";
import InputText from "../InputText";
import FormComponent from "../FormComponent";
import FormRegister from "../FormRegister";

export default function Register({ handleClick }) {

  return (
    <>
      <HeaderComponent>
        <Logo />
        <ToggleTheme fontSize='1rem' handleClick={handleClick} />
      </HeaderComponent>
      <ContainerBody>
        <ContainerForm>
          <TextComponent text='Cadastre-se' align='justify' sizeResponsive='1.5rem' size='1.5rem' />
          <FormRegister />
        </ContainerForm>
        <ContainerImg> <ImageStyle src="src/assets/delivery.png" /></ContainerImg>
      </ContainerBody>
    </>
  );
}
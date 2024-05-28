import React, { useState, useEffect } from "react";
import { ContainerNavBar, IconBack } from "./styles";
import TextComponent from "../TextComponent";
import ToggleTheme from "../ToggleTheme";
import { useNavigate } from "react-router-dom";

export default function NavBar({handleClick, text}) {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  }
  return (
    <ContainerNavBar>
      <IconBack  onClick={onClickBack}/>
      <TextComponent text={text} />
      <ToggleTheme handleClick={handleClick} />
    </ContainerNavBar>
  );
}
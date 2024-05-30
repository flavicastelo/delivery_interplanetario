import React from "react";
import { ContainerNavBar, DivAux, IconBack, IconHome } from "./styles";
import TextComponent from "../TextComponent";
import ToggleTheme from "../ToggleTheme";
import { useNavigate } from "react-router-dom";

export default function NavBar({handleClick, text}) {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  }
  const onClickHome = () => {
    navigate("/");
    localStorage.clear();
  }
  return (
    <ContainerNavBar>
      <IconBack  onClick={onClickBack}/>
      <TextComponent text={text} />
      <DivAux>
      <IconHome  onClick={onClickHome}/> 
      <ToggleTheme fontSize='1rem' handleClick={handleClick} />
      </DivAux>
      
    </ContainerNavBar>
  );
}
import React from "react";
import NavBar from "../NavBarComponent";
import { ContainerBody } from "./styles";
import ButtonIcon from "../ButtonIconComponent";
import Card from "../CardComponent";
import { useNavigate } from "react-router-dom";


export default function Home({ handleClick }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/addAddress");
  }

  return (
    <>
      <NavBar handleClick={handleClick} text='Endereços' />
      <ContainerBody>
        <ButtonIcon onClick={onClick}/>
        <Card />
      </ContainerBody>
    </>
  );
}
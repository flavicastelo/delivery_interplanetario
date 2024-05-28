import React from "react";
import NavBar from "../NavBarComponent";
import { ContainerBody } from "./styles";
import ButtonIcon from "../ButtonIconComponent";
import Card from "../CardComponent";

export default function Home({ handleClick }) {
  return (
    <>
      <NavBar handleClick={handleClick} />
      <ContainerBody>
        <ButtonIcon />
        <Card />
      </ContainerBody>
    </>
  );
}
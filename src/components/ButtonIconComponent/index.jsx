import React from "react";
import { ContainerButtonIcon } from "./styles";
import { GrFormAdd } from "react-icons/gr";
import TextComponent from "../TextComponent";

export default function ButtonIcon({ handleClick }) {
  return (
    <ContainerButtonIcon onClick={handleClick}>
      <GrFormAdd />
      <TextComponent text='Adicionar novo endereço' size='0.6rem' />
    </ContainerButtonIcon>
  );
}
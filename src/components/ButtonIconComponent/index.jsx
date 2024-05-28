import React from "react";
import { ContainerButtonIcon } from "./styles";
import { GrFormAdd } from "react-icons/gr";
import TextComponent from "../TextComponent";

export default function ButtonIcon({ onClick }) {
  return (
    <ContainerButtonIcon onClick={onClick}>
      <GrFormAdd />
      <TextComponent text='Adicionar novo endereço' size='0.6rem' />
    </ContainerButtonIcon>
  );
}


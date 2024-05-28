import React from "react";
import { CheckBox, ContainerAddress, ContainerCard, ContainerHeaderCard } from "./styles";
import TypeAddress from "../TypeAddressComponent";
import TextComponent from "../TextComponent";
import LinkComponent from "../LinkComponent";


export default function Card({ handleClick }) {
  return (
    <ContainerCard>
      <ContainerHeaderCard>
        <TypeAddress type={true} size='0.8rem' />
        <CheckBox type="checkbox" />
      </ContainerHeaderCard>
      <ContainerAddress>
        <TextComponent text='TESTE' />
        <TextComponent text='TESTE' />
        <TextComponent text='TESTE' />
      </ContainerAddress>
      <LinkComponent text='Editar' />
    </ContainerCard>
  );
}
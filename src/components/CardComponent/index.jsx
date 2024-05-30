import React from "react";
import { CheckBox, ContainerAddress, ContainerCard, ContainerHeaderCard } from "./styles";
import TextComponent from "../TextComponent";
import LinkComponent from "../LinkComponent";
import { useNavigate } from "react-router-dom";
import IconComponent from "../IconComponent";


export default function Card({ handleClick, type, address }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/editAddress");
    alert("A função de editar ainda não funciona! :(");
  }
  
  const addressText = address.street + ", " + address.number + ", " + address.neighborhood;
  const cityState = address.city + "," + address.state;
  const addressMars = "Lote: " + address.marsAddress;
  return (
    <ContainerCard>

      <ContainerHeaderCard>
        <IconComponent type={type === 'Terra' ? true : false} size='0.8rem' />
        <CheckBox type="checkbox" />
      </ContainerHeaderCard>
      <ContainerAddress>
        <TextComponent text={addressText} size='0.8rem' sizeResponsive="0.6rem" />
        <TextComponent text={cityState} size='0.8rem' sizeResponsive="0.6rem" />
        <TextComponent text={address.country} size='0.8rem' sizeResponsive="0.6rem" />
        <TextComponent text={addressMars} size='0.8rem' sizeResponsive="0.6rem" />
      </ContainerAddress>

      <LinkComponent handleClick={onClick} text='Editar' type={type} />


    </ContainerCard>
  );
}
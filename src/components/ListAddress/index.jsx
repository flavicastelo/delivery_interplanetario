import React from "react";
import NavBar from "../NavBarComponent";
import { ContainerBody } from "./styles";
import ButtonIcon from "../ButtonIconComponent";
import Card from "../CardComponent";
import { useNavigate } from "react-router-dom";
import TextComponent from "../TextComponent";

export default function ListAddress({ handleClick }) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/addAddress");
  }
  const database = JSON.parse(localStorage.getItem('user'));
  console.log(database);
  return (
    <>
      <NavBar handleClick={handleClick} text='Endereços' />
      {database === null ? <TextComponent text='Erro! Tente cadastrar um usuário novamente!' /> : <ContainerBody>
        <ButtonIcon onClick={onClick} />
        {database.length > 0 ? (
          database.map((item, index) => (
            console.log(item),
            <Card key={index} type='Terra' address={item} />
          ))
        ) : (
          <p>Nenhum endereço encontrado</p>
        )}
      </ContainerBody>}
      
    </>
  );
}
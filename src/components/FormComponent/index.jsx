import React, { useState } from "react";
import TextComponent from "../TextComponent";
import { AuxDiv, ContainerForm } from "./styles";
import InputText from "../InputText";
import ButtonComponent from "../ButtonComponent";
import { useNavigate } from "react-router-dom";

export default function FormComponent() {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [marsAddress, setMarsAddress] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
   
    if (!street || !number || !neighborhood || !city || !state || !country || !marsAddress) {
      alert("Preencha todos os campos!");
      return;
    }
    if(marsAddress.length !== 4){
      alert("O campo lote tem que ter exatamente 4 dígitos!");
      return;
    }
    const newAddress = {
      street: street,
      number: number,
      neighborhood: neighborhood,
      city: city,
      state: state,
      country: country,
      marsAddress: marsAddress,
    };

    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("Usuário não encontrado!");
      return;
    }

    if (!storedUser.address) {
      storedUser.address = [];
    }
    const addAddress = [...storedUser, newAddress];
    localStorage.setItem("user", JSON.stringify(addAddress));

    navigate("/listAddress");
  };
  return (
    <ContainerForm>
        <InputText
          height='2rem'
          placeholder="Rua"
          required
          onChange={(e) => { setStreet(e.target.value) }}
        />
        <InputText
          type='number'
          height='2rem'
          placeholder="Número"
          required
          onChange={(e) => { setNumber(e.target.value) }}
        />
        <InputText
          height='2rem'
          placeholder="Bairro"
          required
          onChange={(e) => { setNeighborhood(e.target.value) }}
        />
        <InputText
          height='2rem'
          placeholder="Cidade"
          required
          onChange={(e) => { setCity(e.target.value) }}
        />
        <InputText
          height='2rem'
          placeholder="Estado"
          required
          onChange={(e) => { setState(e.target.value) }}
        />
        <InputText
          height='2rem'
          placeholder="País"
          required
          onChange={(e) => { setCountry(e.target.value) }}
        />
        <InputText
          height='2rem'
          placeholder="Lote de Marte"
          required
          maxLength='4'
          type='number'
          pattern="[0-9]+"
          onChange={(e) => { setMarsAddress(e.target.value) }}
        />
      <ButtonComponent size='6rem' text='Enviar' onClick={handleFormSubmit} />
    </ContainerForm>
  );
}


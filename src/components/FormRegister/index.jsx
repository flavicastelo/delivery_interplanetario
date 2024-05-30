import React, { useEffect, useState } from "react";
import { AuxDiv, ContainerForm } from "./styles";
import InputText from "../InputText";
import ButtonComponent from "../ButtonComponent";
import InputPassword from "../InputPassword";
import { useNavigate } from "react-router-dom";

export default function FormRegister({ onClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
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

    if (!name || !email || !password || !confirmPass || !street || !number || !neighborhood || !city || !state || !country || !marsAddress) {
      alert("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPass) {
      alert("Senhas diferentes!");
      return;
    }

    if(marsAddress.length !== 4){
      alert("O campo lote tem que ter exatamente 4 dígitos!");
      return;
    }
    const newData = {
      name: name,
      email: email,
      password: password,

    };

    const address = {
      street: street,
      number: number,
      neighborhood: neighborhood,
      city: city,
      state: state,
      country: country,
      marsAddress: marsAddress,
    }


    const storedData = JSON.parse(localStorage.getItem("user")) || [];
    if (!storedData.address) {
      newData.address = [];
    }
    const updatedDatabase = [...storedData, newData];
    localStorage.setItem("user", JSON.stringify(updatedDatabase));
  
    const addAddress = [...storedData, address];
    localStorage.setItem("user", JSON.stringify(addAddress));
    navigate("/listAddress");
  };

  return (
    <ContainerForm>
      <InputText
        height='2rem'
        placeholder="Nome"
        required
        onChange={(e) => { setName(e.target.value) }}
      />
      <InputText
        height='2rem'
        type='email'
        pattern=".+@example\.com"
        placeholder="Email"
        required
        onChange={(e) => { setEmail(e.target.value) }}
      />
      <AuxDiv>
        <InputPassword
          height='2rem'
          placeholder="Senha"
          required
          onChange={(e) => { setPassword(e.target.value) }}
        />
        <InputPassword
          height='2rem'
          placeholder="Repita a senha"
          required
          onChange={(e) => { setConfirmPass(e.target.value) }}
        />
      </AuxDiv>
      <AuxDiv>
        <InputText
          height='2rem'
          placeholder="Rua"
          required
          onChange={(e) => { setStreet(e.target.value) }}
        />
        <InputText
          type='number'
          height='2rem'
          width='30%'
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
      </AuxDiv>
      <AuxDiv>
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
      </AuxDiv>
      <InputText
        height='2rem'
        placeholder="Lote de Marte"
        required
        type='number'
        maxLength='4'
        pattern="[0-9]+"
        onChange={(e) => { setMarsAddress(e.target.value) }}
      />
      <ButtonComponent size='6rem' text='Cadastrar' onClick={handleFormSubmit} />
    </ContainerForm>
  );
}


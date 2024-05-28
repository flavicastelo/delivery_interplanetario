import React, { useState, useEffect } from "react";
import { ContainerNavBar, IconBack } from "./styles";
import TextComponent from "../TextComponent";
import ToggleTheme from "../ToggleTheme";

export default function NavBar({handleClick}) {
  return (
    <ContainerNavBar>
      <IconBack />
      <TextComponent text="Endereços" />
      <ToggleTheme handleClick={handleClick} />
    </ContainerNavBar>
  );
}
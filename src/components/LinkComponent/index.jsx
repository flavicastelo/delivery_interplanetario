import React from "react";
import TextComponent from "../TextComponent";
import { ContainerLink } from "./styles";

export default function LinkComponent({ handleClick, text, color = "theme.colors.color3" }) {
  return (
    <ContainerLink onClick={handleClick}>
      <TextComponent text={text} size='0.6rem' color={color} />
    </ContainerLink>
  );
}


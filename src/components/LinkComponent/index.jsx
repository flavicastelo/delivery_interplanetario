import React from "react";
import TextComponent from "../TextComponent";
import { ContainerLink } from "./styles";

export default function LinkComponent({ handleClick, text, color = "theme.colors.color3" }) {
  return (
    <ContainerLink onClick={handleClick}>
      <TextComponent text={text} sizeResponsive='0.6rem' size='0.7rem' color={color} />
    </ContainerLink>
  );
}


import React from "react";
import { TextStyled } from "./styles";

export default function TextComponent({ text, sizeResponsive, color, size, decoration, align }) {
    return (
        <TextStyled color={color} size={size} sizeResponsive={sizeResponsive} decoration={decoration} align={align}>
            {text}
        </TextStyled>
    );

}

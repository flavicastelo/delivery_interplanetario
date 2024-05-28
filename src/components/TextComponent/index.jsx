import React from "react";
import { TextStyled } from "./styles";

export default function TextComponent({ text, color, size, decoration, align }) {
    return (
        <TextStyled color={color} size={size} decoration={decoration} align={align}>
            {text}
        </TextStyled>
    );

}

import React from "react";
import { ButtonStyled } from "./styles";

export default function ButtonComponent({type, onClick, text, size }) {
    return (
        <ButtonStyled size={size} type={type}  onClick={onClick}>
            {text}
        </ButtonStyled>
    );

}
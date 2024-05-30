import React from "react";
import { ContainerTitle, TitleStyled } from "./styles";

export default function Logo() {
    return (
        <ContainerTitle>
            <TitleStyled sizeResponsive='2rem' size='2rem'>
                INTER
            </TitleStyled>
            <TitleStyled sizeResponsive='1rem' size='1rem'>
                Delivery
            </TitleStyled>
        </ContainerTitle>
    );

}

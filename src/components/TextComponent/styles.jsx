import React from "react";
import styled, { css } from "styled-components";

export const TextStyled = styled.p`
    color: ${(props) => props.color || props.theme.colors.color5};
    font-size: ${props => props.size || '1rem'};
    text-align: ${props => props.align || 'center'};;
    text-decoration: ${props => props.decoration || 'none'};
    @media screen and (max-width: 768px) {
        font-size: ${props => props.size || '0.8rem'};
    }
`;

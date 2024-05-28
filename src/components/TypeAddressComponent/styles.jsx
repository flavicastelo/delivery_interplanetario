import React from "react";
import styled, { css } from "styled-components";

export const ContainerTypeAddress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
  gap: 0.4rem;
  border-radius: 25px;
  font-size: ${props => props.size || '1rem'};
  color: ${(props)  => props => props.color || props.theme.colors.color3};
`;
export const TypeAddressText = styled.p`
  color: ${(props)  => props => props.color || props.theme.colors.color3};
  font-size: ${props => props.size || '1rem'};
  text-align: ${props => props.align || 'center'};;
  text-decoration: ${props => props.decoration || 'none'};
  font-weight: bold;
  @media screen and (max-width: 768px) {
      font-size: ${props => props.size || '0.8rem'};
  }
`;

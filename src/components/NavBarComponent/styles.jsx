import { IoMdArrowRoundBack } from "react-icons/io";
import styled, { css } from "styled-components";

export const ContainerNavBar = styled.header`
  display: flex;
  width: 100vdw;
  height: 10dvh;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.color1};
  align-items: center;
  padding: 1rem 3rem;
`;

export const IconBack = styled(IoMdArrowRoundBack)`
    margin-right: 4px; 
    font-size: ${props => props.size || '1rem'};
    cursor: pointer;
    color: ${(props) => props.theme.colors.color5};
`;
import { IoMdArrowRoundBack } from "react-icons/io";
import styled, { css } from "styled-components";
import { RiHome2Fill } from "react-icons/ri";

export const ContainerNavBar = styled.header`
  display: flex;
  width: 100vdw;
  height: 10dvh;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.color3};
  align-items: center;
  padding: 1rem 3rem;
`;

export const IconBack = styled(IoMdArrowRoundBack)`
    margin-right: 4px; 
    font-size: ${props => props.size || '1rem'};
    cursor: pointer;
    color: ${(props) => props.theme.colors.color5};
`;


export const IconHome = styled(RiHome2Fill)`
    margin-right: 4px; 
    font-size: ${props => props.size || '1rem'};
    cursor: pointer;
    color: ${(props) => props.theme.colors.color5};
`;

export const DivAux = styled.div`
  display: flex;
  gap: 1rem;
`
import styled from "styled-components";


export const ContainerBody = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vdw;
  min-height: 100dvh;
  justify-content: start;
  background-color: ${(props) => props.theme.colors.color1};
  align-items: center;
  padding-top: 1rem;
`;


import styled from "styled-components";

export const ContainerBodyEdit = styled.section`
  display: flex;
  width: 100dvw;
  height: 100dvh;
  justify-content: start;
  align-items: center;
  padding-top: 2rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.color1};
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const TypeSelect = styled.select`
  margin-bottom: 1rem;
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.color4};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.color1};
`;

export const Option = styled.option`
  font-size: 0.6rem;
`;

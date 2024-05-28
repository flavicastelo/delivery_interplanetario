import styled from "styled-components";

export const ContainerButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 1rem;
  gap: 1rem;
  color: ${(props) => props.theme.colors.color5};
  width: 15rem;
  height: 2rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.color3};
`;
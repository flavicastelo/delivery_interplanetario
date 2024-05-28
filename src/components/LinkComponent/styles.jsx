import styled from 'styled-components';

export const ContainerLink = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.colors.color3};
`;
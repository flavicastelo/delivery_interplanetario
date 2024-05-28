import styled, {keyframes} from 'styled-components';

export const Btn = styled.button`
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${(props) => props.theme.colors.color5};
`;
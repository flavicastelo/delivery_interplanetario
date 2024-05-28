import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.color5};
  width: auto;
  height: 2rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors.color3};
    @media screen and (max-width: 768px) {
        width: ${props => props.size || "2rem"}
    }
`;
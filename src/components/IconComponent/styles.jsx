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

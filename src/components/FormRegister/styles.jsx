import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 0 2rem;
  @media screen and (max-width: 820px) {
        /* width: 80%; */
  }
`;

export const AuxDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (max-width: 820px) {
        width: 100%;
    }
`;
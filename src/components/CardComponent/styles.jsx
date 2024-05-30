import styled from 'styled-components';

export const ContainerCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15rem;
  gap: 1rem;
  min-height: 8rem;
  margin: 1rem 0;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.color1};
  border: 1px solid ${(props) => props.theme.colors.color4};
  & > *:last-child { 
    align-self: flex-start;
  }
`;

export const ContainerHeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CheckBox = styled.input`
  width: 0.8rem;
  height: 0.8rem;
`;

export const ContainerAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

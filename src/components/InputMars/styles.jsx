import styled from "styled-components";

export const InputFieldMars = styled.input`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "2.5rem"};
    padding: 0.75rem;
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid  ${(props) => props.theme.colors.color5};
    outline: none;
    font-size: 1rem;
    text-align: center;
    color: ${(props) => props.theme.colors.color5};
   
    @media screen and (max-width: 768px) {
        width: ${props => props.width || "100%"};
        height: ${props => props.height || "2rem"};
    }
`;

import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    position: relative;
    width:  ${props => props.width || "100%"};
`;

export const InputField = styled.input`
    width:  ${props => props.width || "100%"};
    height: ${props => props.height || "2.5rem"};
    background-color:  transparent;
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.color5};
    outline: none;
    font-size: 0.6rem;
    color: ${(props) => props.theme.colors.color5};
    @media screen and (max-width: 820px) {
        width: ${props => props.width || "100%"};
        height: ${props => props.height || "2rem"}; 
    }
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 820px) {
        top: 0.3rem;
        right: 0.5rem;
    }
`;
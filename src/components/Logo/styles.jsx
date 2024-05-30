import styled from "styled-components";

export const ContainerTitle= styled.section`
    display: flex;
    justify-content: center;
    align-items: baseline;
    color:  ${(props) => props.theme.colors.color3};
    & > *:last-child { 
        color:  ${(props) => props.theme.colors.color4};
    }
`;
export const TitleStyled = styled.h1`
    font-size: ${props => props.size || '4rem'};
    @media screen and (max-width: 768px) {
        font-size: ${props => props.sizeResponsive || '3rem'};
    }
`;


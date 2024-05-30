import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  border-bottom: 1px solid  ${(props) => props.theme.colors.color5};;
  width: 100dvw;
  height: 12dvh;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.color1};
  z-index: 1;
`;

export const ContainerBody = styled.body`
  display: flex;
  align-items: center;
  width: 100vdw;
  height: 100dvh;
  justify-content: start;
  background-color: ${(props) => props.theme.colors.color1};
  @media screen and (max-width: 820px) {
        flex-direction: column-reverse;
  }
`;

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50dvw;
  gap:1rem;
  height: 100%;
  padding-top: 4rem;
  & > *:first-child { 
    align-self: flex-start;
    padding-left: 2rem;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    padding-bottom: 6rem;
    padding-top: 0;
  }
`;

export const ContainerImg = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50dvw;
  height: 100%;
  background-color: ${(props) => props.theme.colors.color2};
  @media screen and (max-width: 820px) {
        width: 80%;
        background-color: transparent;
        height: auto;
  }
`;

export const ImageStyle = styled.img`
  width: 40dvw;
  @media screen and (max-width: 820px) {
    width: 60dvw;
  }
`;
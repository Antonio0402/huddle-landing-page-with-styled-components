import bgDesktopHero from '../../assets/images/bg-hero-desktop.svg';
import bgMobileHero from '../../assets/images/bg-hero-mobile.svg';
import styled from "styled-components";

export const Wrapper = styled.header`
  background-image: url(${() => bgMobileHero});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({theme}) => theme.colors.light};

  @media (min-width: 640px) {
    background-image: url(${() => bgDesktopHero});
  }
`
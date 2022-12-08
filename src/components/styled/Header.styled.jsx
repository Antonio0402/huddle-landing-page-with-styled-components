import styled from "styled-components"
import { Container } from "./Container.styled"
import { StyledButton } from "./Button.styled"

export const StyledHeader = styled(Container)`
  
  & > nav {
    padding-block: 2.5rem;
    display: flex;
    justify-content: space-between;
  }

`

export const HeaderButton = styled(StyledButton)`
  padding-inline: 1.5rem;
  padding-block: 0.25rem;
  border-radius: 50px;  
  border: none;
  color: ${({theme}) => theme.colors['grayish-blue']};
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
  box-shadow: ${({theme}) => theme.shadow.btn};


  &:hover {
    transform: scale(0.98);
  }

  @media (min-width: 640px) {
    & {
      padding-inline: 3rem;
      padding-block: 0.75rem;
      font-size: ${({theme}) => theme.text['500']};
    }
  }
`

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding-block: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;

    h1 {
      font-family: ${({theme}) => theme.fonts.heading};
      font-weight: 600;
      font-size: ${({theme}) => theme.text['900-sm']};
    }

    p {
      font-size: ${({theme}) => theme.text['body-hero']};
      letter-spacing: ${({theme}) => theme.tracking.wide};
    }

    @media (min-width: 640px) {
      & {
        text-align: start;
        align-items: start;
        justify-content: center;
      }
      h1 {
        font-size: ${({theme}) => theme.text['900']};
        letter-spacing: ${({theme}) => theme.tracking.tight};
      }

      p {
        font-size:  ${({theme}) => theme.text['600']};
        letter-spacing: 0;
      }
    }
  }

  @media (min-width: 640px) {
    & {
      flex-direction: row;
    }

    & > * {
      width: 100%;
    }
  }
` 
import styled from "styled-components";
import { Container } from "./Container.styled";

export const StyledMain = styled(Container)`
  position: relative;
  padding-top: 3.75rem;
  padding-bottom: 12rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & > *:last-child {
    position: absolute;
    height: fit-content;
    transform: translateY(-60%);
    inset: 100% 10% 0 10%;
    padding-block: 1.5rem;
    padding-inline: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1.5rem;
    background-color: #fff;
    border-radius: 0.75rem;
    box-shadow: 0 -2px 4px 4px hsla(208, 11%, 55%, 0.1);
    z-index: 10;

    h2 {
      font-size: ${({theme}) => theme.text['800-sm']};
      letter-spacing: ${({theme}) => theme.tracking.tighter};
      font-weight: 600;
      font-family:  ${({theme}) => theme.fonts.heading};
    }

    button {
      margin-inline: auto;
      width: fit-content;
    }

    @media (min-width: 640px) {
      inset: 100% 25% 0 25%;
    }
  }

  @media (min-width: 640px) {
    & {
      padding-top: 9.37rem;
      gap: 1.5rem;
    }
  }
`

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1rem;
  padding-block: 3rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-shadow: ${({theme}) => theme.shadow.btn};
  gap: 3rem;

  & > *:first-child {
    width: 75%;
  }

  & > *:last-child {
    text-align: center;
    h3 {
      font-family: ${({theme}) => theme.fonts.heading};
      font-size: ${({theme}) => theme.text['700-sm']};
      font-weight: 600;
      margin-block-end: 1rem;
    }

    p {
      font-size: ${({theme}) => theme.text['body']};
    }

    @media (min-width: 640px){
      & {
        text-align: start;
      }

      h3 {
        font-size: ${({theme}) => theme.text['700']};
      }

      p {
        max-width: 75%;
        font-size: ${({theme}) => theme.text['600']};
      }
    }
  }

  @media (min-width: 640px) {
    padding-block: 2.5rem;
    flex-direction: ${({isReverse}) => isReverse || 'row'};
    justify-content: space-between;

    & > * {
      padding-inline-start: 4rem;
    }
  }
`
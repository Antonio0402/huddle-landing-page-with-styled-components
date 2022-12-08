import styled from "styled-components";
import { Container } from "./Container.styled"; 

export const StyledFooter = styled.footer`
  background-color: ${({theme}) => theme.colors.dark};
  padding-top: 9.75rem;
  padding-bottom: 3rem;
  color: ${({theme}) => theme.colors.light};


`

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.5rem;

  & > *:first-child {
    display: grid;
    gap: 1.5rem;

    div > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  & > *:nth-child(2) {
    display: grid;
    gap: 1rem;
    ul {
      padding-left: 0;
      
      & > li:not(:last-child) {
        margin-bottom: 1rem
      }

      li > a{
        font-size: ${({theme}) => theme.text['link-sm']};
        cursor: pointer;

        @media (min-width: 640px) {
          font-size: ${({theme}) => theme.text['400']};
        }
      }

      li > a:hover {
        text-decoration: underline;
      }
    }

    @media (min-width: 640px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  & > *:last-child {
    margin-inline: auto;
    display: grid;
    gap: 1rem;
    ul {
      display: flex;
      gap: 1rem;
      padding-left: 0;
      align-items: center;
      justify-content: center;
      
      li > a {
        font-size: 1.5rem;
        color: #fff;
      }

      li > a:hover {
        color: ${({theme}) => theme.colors.primary};
      }

      @media (min-width: 640px) {
        justify-content: start;
      }
    }

    @media (min-width: 640px) {
      align-self: stretch;
      grid-template-rows: 1fr 1fr;
      align-items: end;

    }

  }

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;

    & > * {
      width: 100%;
    }
  }
`
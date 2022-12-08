import styled from "styled-components";

export const StyledContact = 
styled.p`
  display: grid;
  grid-template-columns: auto 1fr; 
  gap: 1rem;
  align-items: center;

  & > img:first-of-type {
    align-self: start;
    padding-top: 0.5rem;
  }
  
  & > img {
    display: inline-block;
  }

  & > span {
    font-size: ${({theme}) => theme.text['400-sm']};
    letter-spacing: ${({theme}) => theme.tracking.wide};
    line-height: 1.65;

    @media (min-width: 640px) {
      & {
        font-size: ${({theme}) => theme.text['400']};
      }
    }
  }
`
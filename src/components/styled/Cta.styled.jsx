import styled from "styled-components";
import { HeaderButton } from "./Header.styled";

export const Cta = styled(HeaderButton)`
  padding-inline: 3rem;
  padding-block: 0.75rem;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.light};
  font-size: ${({theme}) => theme.text['btn-sm']};

  &:hover {
    opacity: 0.75;
    box-shadow: ${({theme}) => theme.shadow.cta};
    transform: none;
  }

  @media (min-width: 640px) {
    & {
      font-size: ${({theme}) => theme.text['500']};
    }
  }

`
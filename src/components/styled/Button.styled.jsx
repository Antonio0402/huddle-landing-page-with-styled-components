import styled from "styled-components";

export const StyledButton = styled.button `
  background-color: ${({theme}) => theme.colors['grayish-blue']};
  border: 1px solid ${({theme}) => theme.colors['grayish-blue']};
  border-radius: 0.25rem;
  color: ${({theme}) => theme.colors.light};
  display: inline-block;
  font-weight: 400;
  padding: 0.375rem 0.75rem; 
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  vertical-align:middle;
`

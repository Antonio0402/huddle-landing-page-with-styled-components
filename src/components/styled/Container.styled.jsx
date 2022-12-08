import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 1320px;
  padding-inline: 2.5rem;
  margin-inline: auto;

  @media (min-width: 640px) {
    & {
      padding: 1rem;
    }
  }
`
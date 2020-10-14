import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  max-width: 3440px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 380px calc(100% - 450px);
  grid-auto-flow: row;
  grid-gap: 2.5rem;

  @media (max-width: 780px) {
    padding: 24px;
    grid-template-columns: 100%;
  }
`;

export const Main = styled.main`
  height: 100%;
  padding-top: 5rem;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 780px) {
    padding-top: 0;
  }
`;

export const Children = styled.div`
  width: 100%;
  max-width: calc(80% - 3.4rem);
  padding-right: 3.4rem;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding-right: 0;
    order: 3;
  }
`;

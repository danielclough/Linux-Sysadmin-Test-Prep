import styled from '@emotion/styled';

export const Container = styled.aside`
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  position: sticky;
  top: 0;
  padding: 3rem 1rem;
  transition: transform 0.5s;
  height: calc(100vh - 1px);

  nav {
    width: 100%;
    padding-top: 1rem;
    align-self: flex-start;
    flex: 1;
  }

  @media (max-width: 780px) {
    max-width: 90%;
    min-width: auto;
    z-index: 1001;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding-top: 2rem;
    background: ${({ theme }) => theme.colors.background};
    transform: translate3d(
      ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100%')},
      0,
      0
    );
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 70%;

  a {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  padding-left: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.li`
  padding-left: 1rem;
  width: 100%;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 1.3rem;
  color: ${({ theme }) => theme.colors.title};
  letter-spacing: 0.32rem;
`;

export const Item = styled.li`
  font-size: 1.6rem;
  width: 100%;
  transition: all 200ms ease-in-out;
  padding: 0 2.2rem;
  cursor: pointer;

  a,
  span {
    display: block;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    padding: .5rem 1rem;
    margin: .4rem 0;
    border-radius: 4px;
    font-weight: normal;

    text-decoration: none;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    cursor: pointer;
    margin: 0 auto;

    transition: all 0.2s ease;

    svg {
      width: 2rem;
      height: 2rem;
    }

    &:not(.active-link):hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active-link {
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.shape};
    }

    @media (max-width: 780px) {
      &.active-link {
        background: ${({ theme }) => theme.colors.shape};
        fill: #ddd;
      }
    }
  }
`;

export const SubItem = styled(List)`
  margin: .5rem 0 0 0;
`;

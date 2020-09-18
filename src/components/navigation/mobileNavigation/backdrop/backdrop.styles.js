import styled from "styled-components"

export const BackdropColor = styled.ul`
  background-color: ${({ theme }) => theme.main.primary};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  opacity: ${({ isMobileNavActive }) => (isMobileNavActive ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  display: ${({ isMobileNavActive }) => (isMobileNavActive ? "block" : "none")};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-direction: column;
  transform: ${({ isMobileNavActive }) =>
    `translateX(${isMobileNavActive ? "0" : "100%"})`};
  margin: 0;

  li {
    color: ${({ theme }) => theme.main.body};
    a {
      font-size: 2.5rem;
      z-index: 10000;

      &:hover {
        color: ${({ theme }) => theme.main.text} !important;
      }
    }
  }
  /* transform: translateY(0); */
`

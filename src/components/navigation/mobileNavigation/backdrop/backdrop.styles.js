import styled from "styled-components"

export const BackdropColor = styled.div`
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
  flex-direction: column;
  transform: ${({ isMobileNavActive }) =>
    `translateX(${isMobileNavActive ? "0" : "100%"})`};

  li {
    a {
      color: ${({ theme }) => theme.main.body};
      font-size: 2.5rem;

      &:hover {
        color: ${({ theme }) => theme.main.text};
      }
    }
  }
  /* transform: translateY(0); */
`

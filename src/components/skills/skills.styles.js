import media from "components/theme"
import styled from "styled-components"

export const SkillsText = styled.h3`
  margin: 5rem 0;
  text-align: center;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.main.text};

  ${media().lg`
    font-size: 2rem;
  `}
`

export const SkillsContainer = styled.section`
  padding: 0 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;

  ${media().lg`
    gap: 2.5rem;
    grid-template-columns: 1fr;
  `}
`

export const FrontendContainer = styled.div`
  /* box-shadow: ${({ theme }) => theme.main.boxShadow}; */
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.main.grey};
`

export const BackendContainer = styled(FrontendContainer)``

export const FrontendText = styled.h4`
  font-size: 1.5rem;
  margin-top: 5%;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.main.text};
`

export const BackendText = styled(FrontendText)``

export const FrontendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 200px);
`

export const BackendGrid = styled(FrontendGrid)``

import styled from "styled-components"

export const SkillsText = styled.h3`
  margin: 5rem 0;
  text-align: center;
  font-size: 2.5rem;
`

export const SkillsContainer = styled.section`
  padding: 0 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
`

export const FrontendContainer = styled.div`
  box-shadow: 0 9px 54px -4px rgba(224, 224, 224, 1);
  width: 100%;
  padding: 2rem;
  background-color: #f5f5f5;
`

export const BackendContainer = styled(FrontendContainer)``

export const FrontendText = styled.h4`
  font-size: 1.5rem;
  margin-top: 5%;
  text-align: center;
  text-transform: uppercase;
`

export const BackendText = styled(FrontendText)``

export const FrontendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 200px);
`

export const BackendGrid = styled(FrontendGrid)``

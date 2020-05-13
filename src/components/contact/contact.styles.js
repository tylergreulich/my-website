import { Form } from "formik"
import styled from "styled-components"

export const ContactText = styled.h3`
  text-align: center;
  margin: 5rem 0;
  font-size: 2.5rem;
  font-family: Lato;
  color: ${({ theme }) => theme.main.text};
`

export const FormWrapper = styled.section`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

export const StyledForm = styled(Form)`
  width: 75%;
  height: 100%;
  background-color: ${({ theme }) => theme.main.grey};
  color: ${({ theme }) => theme.body};
  padding: 56px;
  margin-bottom: 0;

  @media (max-width: 1199.98px) {
    width: 85%;
  }

  @media (max-width: 560px) {
    max-width: 90%;
  }

  h4 {
    font-size: 1.2rem;
    margin: 2.5rem 0;
  }

  label {
    color: ${({ theme }) => theme.main.text};
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    font-size: 0.8rem;
    background: ${({ theme }) => theme.main.body};
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: inherit;
    border: ${({ theme }) => `0.15rem solid ${theme.main.darkGrey}`};
    line-height: 1.2;
    padding: 0.65rem 0.5rem;
    color: ${({ theme }) => theme.main.text};
  }

  input[type="text"],
  input[type="email"],
  textarea {
    &:active,
    &:focus {
      border: 0.15rem solid ${({ theme }) => theme.main.primary};
    }

    &:invalid {
      box-shadow: none;
    }
  }

  strong {
    font-family: Lato;
    color: ${({ theme }) => theme.main.errorText};
  }

  div {
    margin-bottom: 2rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: Lato;

  button[type="submit"] {
    background: ${({ theme }) => theme.main.primary};
    border: none;
    width: 100%;
    color: ${({ theme }) => theme.main.body};
    font-size: 1rem;
    /* border-radius: 3rem; */
    text-transform: uppercase;
    text-align: center;
    padding: 1.15rem 0;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.main.text};
    }
  }

  button:disabled,
  button[disabled] {
    color: ${({ theme }) => theme.main.body};
    font-weight: 600;
    opacity: 0.6;
    cursor: not-allowed;
  }
`

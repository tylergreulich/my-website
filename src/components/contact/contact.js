import React from "react"
import { Element } from "react-scroll"
import {
  ButtonContainer,
  ContactText,
  FormWrapper,
  StyledForm,
} from "./contact.styles"

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const MyInput = ({ name, type, errors, handleChange }) => (
  <div>
    <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
    <input name={name} type={type} id={name} required />
  </div>
)

export const Contact = ({ location }) => {
  return (
    <Element name="contact-me">
      <ContactText>Contact Me</ContactText>
      <FormWrapper>
        <>
          <StyledForm
            name="new-contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            method="post"
          >
            <input type="hidden" name="form-name" value="new-contact" />
            <input type="hidden" name="bot-field" />
            <div data-netlify-recaptcha="true"></div>
            <MyInput name="name" type="text" />
            <MyInput name="email" type="email" />
            <MyInput name="subject" type="text" />
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                type="textarea"
                name="message"
                rows={4}
                required
                id="message"
              />
            </div>
            <ButtonContainer>
              <button type="submit">Send Message</button>
            </ButtonContainer>
          </StyledForm>
        </>
      </FormWrapper>
    </Element>
  )
}

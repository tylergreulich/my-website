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

const MyInput = ({ name, value, type, errors, handleChange }) => (
  <div>
    <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
    <input name={name} value={value} type={type} id={name} required />
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
            <MyInput name="name" type="text" value={name} />
            <MyInput name="email" type="email" value={email} />
            <MyInput name="subject" type="text" value={subject} />
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                type="textarea"
                value={message}
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

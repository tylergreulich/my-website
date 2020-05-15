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

const MyInput = ({ name, type }) => (
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
        <StyledForm
          name="contactt"
          data-netlify="true"
          method="post"
          action="#"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />{" "}
          <input type="hidden" name="form-name" value="contactt" />
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
      </FormWrapper>
    </Element>
  )
}

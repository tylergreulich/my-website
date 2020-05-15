import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
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
    <input
      name={name}
      value={value}
      type={type}
      id={name}
      onChange={handleChange}
      required
    />
  </div>
)

export const Contact = ({ location }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    "g-recaptcha-response": "",
  })
  const [msgSent, setMsgSent] = React.useState(false)

  const recaptchaRef = React.useRef()

  const resetReCaptcha = async () => {
    await recaptchaRef.current.reset()
  }

  const onExpire = () => {
    resetReCaptcha()
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = event => {
    event.preventDefault()

    setIsSubmitting(true)

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "new-contact",
        ...formValues,
      }),
    })
      .then(() => {
        setIsSubmitting(false)
        setMsgSent(true)
      })
      .catch(error => alert(error))
  }

  const handleChange = event => {
    setFormValues({ [event.target.name]: event.target.value })
  }

  const handleRecaptcha = value => {
    setFormValues({ "g-recaptcha-response": value })
  }

  const { name, email, subject, message } = formValues

  console.log(name)

  // const isEmpty =
  //   name.length === 0 ||
  //   email.length === 0 ||
  //   subject.length === 0 ||
  //   message.length === 0

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
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="new-contact" />
            <input type="hidden" name="bot-field" />
            <MyInput
              name="name"
              type="text"
              value={name}
              handleChange={e => {
                handleChange(e)
              }}
            />
            <MyInput
              name="email"
              type="email"
              value={email}
              handleChange={e => {
                handleChange(e)
              }}
            />
            <MyInput
              name="subject"
              type="text"
              value={subject}
              handleChange={e => {
                handleChange(e)
              }}
            />
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                type="textarea"
                value={message}
                name="message"
                rows={4}
                required
                onChange={e => {
                  handleChange(e)
                }}
                id="message"
              />
            </div>
            <ReCAPTCHA
              sitekey={process.env.GATSBY_RECAPTCHA_KEY}
              ref={recaptchaRef}
              // data-netlify-recaptcha="true"
              onExpire={onExpire}
              size="invisible"
              onChange={handleRecaptcha}
              badge="inline"
            />
            <ButtonContainer>
              <button type="submit">
                {isSubmitting
                  ? "Sending..."
                  : msgSent
                  ? "Sent!"
                  : "Send Message"}
              </button>
            </ButtonContainer>
          </StyledForm>
        </>
      </FormWrapper>
    </Element>
  )
}

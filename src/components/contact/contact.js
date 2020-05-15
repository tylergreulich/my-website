import Axios from "axios"
import { Formik } from "formik"
import React from "react"
import { Element } from "react-scroll"
import * as yup from "yup"
import {
  ButtonContainer,
  ContactText,
  FormWrapper,
  StyledForm,
} from "./contact.styles"

const validationSchema = yup.object({
  name: yup.string().required("Name field is required"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email field is required"),
  subject: yup.string().required("Subject field is required"),
  message: yup.string().required("Message field is required"),
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const MyInput = ({ name, value, type, touched, errors, handleChange }) => (
  <div>
    <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
    <input type="hidden" name="bot-field" />
    <input
      name={name}
      value={value}
      type={type}
      id={name}
      onChange={handleChange}
      required
    />
    <strong>{touched[name] && errors[name] ? errors[name] : ""}</strong>
  </div>
)

export const Contact = ({ location }) => {
  const [status, setStatus] = React.useState("")
  return (
    <Element name="contact">
      <ContactText>Contact Me</ContactText>
      <FormWrapper>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          onSubmit={async (data, { setSubmitting, resetForm }) => {
            setSubmitting(true)

            // async call
            await Axios.post("/", data).catch(error => {
              console.error(error)
              setStatus("Something went wrong")
            })

            await new Promise(res =>
              setTimeout(() => {
                setStatus("Sent!")
                res()
              }, 2500)
            )

            await new Promise(() => {
              setTimeout(() => {
                setSubmitting(false)
                setStatus("Send Message")

                resetForm()
              }, 3000)
            })
          }}
          validationSchema={validationSchema}
          validateOnChange
          name="contact"
          netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
        >
          {({
            values,
            isSubmitting,
            errors,
            handleChange,
            touched,
            setFieldTouched,
          }) => {
            const isEmpty =
              values.name.length === 0 ||
              values.email.length === 0 ||
              values.message.length === 0 ||
              values.subject.length === 0 ||
              errors.email ||
              errors.message ||
              errors.subject ||
              errors.name

            return (
              <StyledForm action="POST" data-netlify="true">
                <MyInput
                  name="name"
                  type="text"
                  errors={errors}
                  touched={touched}
                  value={values.name}
                  handleChange={e => {
                    setFieldTouched("name", true)
                    handleChange(e)
                  }}
                />
                <MyInput
                  name="email"
                  type="email"
                  errors={errors}
                  touched={touched}
                  value={values.email}
                  handleChange={e => {
                    setFieldTouched("email", true)
                    handleChange(e)
                  }}
                />
                <MyInput
                  name="subject"
                  type="text"
                  errors={errors}
                  touched={touched}
                  value={values.subject}
                  handleChange={e => {
                    setFieldTouched("subject", true)
                    handleChange(e)
                  }}
                />
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="textarea"
                    value={values.message}
                    name="message"
                    rows={4}
                    required
                    onChange={e => {
                      setFieldTouched("message", true)
                      handleChange(e)
                    }}
                    id="message"
                  />
                  <strong>
                    {touched.message && errors.message ? errors.message : null}
                  </strong>
                </div>
                <div>
                  <div data-netlify-recaptcha="true" />
                </div>
                <ButtonContainer>
                  <button type="submit" disabled={isSubmitting || isEmpty}>
                    {status?.length
                      ? status
                      : isSubmitting
                      ? "sending..."
                      : "send message"}
                  </button>
                </ButtonContainer>
              </StyledForm>
            )
          }}
        </Formik>
      </FormWrapper>
    </Element>
  )
}

import Axios from "axios"
import { Field, Formik, useField } from "formik"
import React from "react"
import { Element } from "react-scroll"
import * as yup from "yup"
import {
  ButtonContainer,
  ContactText,
  FormWrapper,
  StyledForm,
} from "./contact.styles"

const validationSchema = yup.object().shape({
  email: yup.string().email("Email must be a valid email"),
})

const MyTextField = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField(props)
  let errorText =
    meta && meta.error && meta.error.length && meta.touched ? meta.error : ""

  return (
    <Field
      placeholder={placeholder}
      {...field}
      helpertext={errorText}
      error={errorText}
      required={true}
      type={type}
    />
  )
}

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
            const r = await Axios.post("/", data).catch(error => {
              console.error(error)
              setStatus("Something went wrong")
            })

            await new Promise(() =>
              setTimeout(() => {
                setStatus("Sent!")
              }, 2500)
            )

            setSubmitting(false)
            setStatus("Send Message")

            resetForm()
          }}
          validationSchema={validationSchema}
          validateOnChange
          name="contact"
          netlify-honeypot="bot-field"
          data-netlify="true"
          method="post"
        >
          {({ values, isSubmitting, handleChange, handleBlur, errors }) => {
            return (
              <StyledForm>
                <label for="name">Name</label>
                <input type="hidden" name="bot-field" />
                <MyTextField
                  name="name"
                  value={values.name}
                  placeholder={errors.name ? errors.name : ""}
                  type="text"
                  id="name"
                />
                <label for="email">
                  {errors.email ? errors.email : "Email"}
                </label>
                <MyTextField
                  name="email"
                  value={values.email}
                  placeholder={errors.email ? errors.email : ""}
                  type="email"
                  id="email"
                />
                <label for="subject">Subject</label>
                <MyTextField
                  name="subject"
                  value={values.subject}
                  placeholder={errors.subject ? errors.subject : ""}
                  type="text"
                  id="subject"
                />
                <label for="message">Message</label>
                <Field
                  component="textarea"
                  placeholder={errors.message ? errors.message : ""}
                  value={values.message}
                  name="message"
                  rows={4}
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="message"
                />
                <ButtonContainer>
                  <button type="submit" disabled={isSubmitting}>
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

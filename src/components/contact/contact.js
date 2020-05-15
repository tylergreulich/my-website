import Axios from "axios"
import { Field, Formik } from "formik"
import qs from "qs"
import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
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

const recaptchaRef = React.createRef()

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
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [executing, setExecuting] = React.useState(false)
  const [formValues, setFormValues] = React.useState({})
  const [verified, setVerified] = React.useState(false)
  const [token, setToken] = React.useState("")
  const [rcError, setRcError] = React.useState("")
  const [msgSent, setMsgSent] = React.useState(false)
  const [formReset, setFormReset] = React.useState({})
  const [errMsg, setErrMsg] = React.useState("")

  React.useEffect(() => {
    const handleSubmit = async (formValues, token) => {
      const data = {
        ...formValues,
        "g-recaptcha-response": token,
      }

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
        url: "/",
      }

      try {
        await Axios(options)
        setIsSubmitting(false)
        setMsgSent(true)

        await new Promise(() => {
          setTimeout(() => {
            setMsgSent(false)
          }, 2500)
        })
      } catch (e) {
        setErrMsg(e.message)
      }
    }

    if (token) {
      handleSubmit(formValues, token)
    }
  }, [formReset, formValues, token])

  const resetEverything = resetForm => {
    if (rcError) {
      setRcError(false)
    }

    if (resetForm) {
      setMsgSent(false)
      setErrMsg(false)
      resetForm()
    }

    resetReCaptcha()
  }

  const resetReCaptcha = async () => {
    console.log("resetting...")
    await recaptchaRef.current.reset()
    setVerified(false)
  }

  const onError = () => {
    console.log("error...")
    setRcError(true)
  }

  const onExpire = () => {
    console.log("expired...")
    console.log("resetting...")
    resetReCaptcha()
  }

  const onVerify = token => {
    console.log("verified...")
    setToken(token)
    setVerified(true)
    setExecuting(false)
  }

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
            "bot-field": "",
            "form-name": "contact",
          }}
          onSubmit={values => {
            setIsSubmitting(true)
            setFormValues({ ...values })
            setExecuting(true)
            recaptchaRef.current.execute()
          }}
          validationSchema={validationSchema}
          validateOnChange
        >
          {({
            values,
            errors,
            handleChange,
            touched,
            setFieldTouched,
            resetForm,
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
              <>
                <StyledForm
                  name="contact"
                  data-netlify={true}
                  data-netlify-honeypot="bot-field"
                  data-netlify-recaptcha={true}
                >
                  <Field type="hidden" name="form-name" />
                  <Field type="hidden" name="bot-field" />
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
                      {touched.message && errors.message
                        ? errors.message
                        : null}
                    </strong>
                  </div>
                  <ReCAPTCHA
                    sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                    ref={recaptchaRef}
                    data-netlify-recaptcha="true"
                    onError={onError}
                    onExpire={onExpire}
                    size="invisible"
                    onChange={onVerify}
                    badge="inline"
                  />
                  {rcError && (
                    <span className={`badge badge-primary mx-2 p-2`}>
                      error
                    </span>
                  )}
                  <ButtonContainer>
                    <button type="submit" disabled={isEmpty}>
                      {isSubmitting
                        ? "Sending..."
                        : msgSent
                        ? "Sent!"
                        : "Send Message"}
                    </button>
                  </ButtonContainer>
                </StyledForm>
              </>
            )
          }}
        </Formik>
      </FormWrapper>
    </Element>
  )
}

import * as Yup from 'yup'
// import { phoneRegex } from 'portal/utils/helper'

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required')
    .email('Email must be use format'),
  birthDate: Yup.string()
    .required('Required'),
})

export default FormSchema

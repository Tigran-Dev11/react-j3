import * as yup from "yup";



export const registerSchema = yup
  .object({
   firstName: yup.string().required().min(4),
   lastName: yup.string().required().min(4),
   email: yup.string().email().required().min(4),
   password: yup.string().required().min(4),
   confirmPassword: yup.string().required().min(4).oneOf([yup.ref("password"), null], "Passwords must match"),


  })


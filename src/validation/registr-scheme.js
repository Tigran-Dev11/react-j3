import * as yup from "yup";

export const registerScheme = yup.object({
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  isAccept: yup.boolean().oneOf([true], "Please accept this checkbox"),
});

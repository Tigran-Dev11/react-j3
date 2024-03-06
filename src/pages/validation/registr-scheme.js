import * as yup from "yup";

export const registrScheme = yup.object({
  firstName: yup.string().required().min(2),
  lastName: yup.string().required().min(2),
  email: yup.string().email().required(),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  isAccept: yup.boolean().oneOf([true], "Please accepted this checkbox"),
});

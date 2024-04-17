import * as yup from "yup";

export const messageScheme = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  text: yup.string().required(),
});

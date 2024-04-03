import * as  yup from "yup"


export const createUserScheme = yup.object({
  id: yup.string(),
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  gender: yup.string().required(),
  status: yup.string().required(),
});

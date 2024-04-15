import yup from "yup"

export const loginScheme = yup.object({
email:yup.string().required().min(6),
password:yup.string().required().min(6)

})
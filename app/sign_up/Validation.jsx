import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required Field,Must be filled"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required Field,Must be filled"),
  email: Yup.string().email("Invalid email").required("Required Field,Must be filled"),
  password: Yup.string()
    .required("Required Field,Must be filled")
    .min(8, "Password must be at least 8 character long"),
});
export default SignupSchema;

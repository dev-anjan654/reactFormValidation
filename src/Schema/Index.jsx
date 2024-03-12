import * as Yup from 'yup';

export const userSchema = Yup.object({
    name: Yup.string().min(2).max(15).required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).max(15).required("Password is required"),
    confirm_password: Yup.string().required("Confirm password is required").oneOf([Yup.ref('password'), null], "Password must match")
});
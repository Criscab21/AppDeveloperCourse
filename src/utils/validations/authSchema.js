import { object, string, ref } from "yup";

export const registerSchema = object().shape({
    confirmPassword: string().required("Confirmacion es obligatoria").oneOf([ref("password"),null], "La contraseña no coincide"),
    password: string().required("La contraseña es obligatoria").min(8,"Minimo 8 caracteres"),
    name: string().required("El nombre de perfil es obligatorio").min(4, "Minimo 4 caracteres"),
    email: string().required("El email es obligatorio").email("Email invalido"),
})

export const loginSchema = object().shape({
    password: string().required("La contraseña es obligatoria").min(8,"Minimo 8 caracteres"),    
    email: string().required("El email es obligatorio").email("Email invalido"),    
})
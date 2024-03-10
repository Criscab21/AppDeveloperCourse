import { View , StyleSheet, Text, Pressable} from "react-native"
import { useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useLoginMutation } from "../app/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../utils/validations/authSchema";

const Login = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerLogin] = useLoginMutation();    
    const dispatch = useDispatch();    
       
    const onSubmit = async () => {  
        try {
            loginSchema.validateSync({email, password});
            const {data} = await triggerLogin({ email, password });         
            dispatch(setUser({email:data.email, idToken:data.idToken, localId:data.localId})); 
        } catch (error) {
            setErrorEmail("");
            setPassword("");            
            switch(error.path) {
                case "email": setErrorEmail(error.message);
                    break
                case "password": setErrorPassword(error.message);
                    break               
                default:
                    break
            }
        }        
    }

    return (
        <View style={styles.container}>      
            <Text style={styles.title} >Inicio de sesion</Text>
            <View style={styles.inputContainer}>
                <InputForm                       
                    value={email}
                    onChangeText={(t) => setEmail(t)}                   
                    label='Email'    
                    isSecure={false}     
                    error={errorEmail}            
                />
                <InputForm 
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    label='Contraseña' 
                    isSecure={true}    
                    error={errorPassword}                        
                />                           
                <SubmitButton title='Ingresar' onPress={() => onSubmit()}/>
                <Text style={styles.sub}>No tiene cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.subLink}>Registro</Text>
                </Pressable>
            </View> 
        </View>                                 
        
    )
}


const styles = StyleSheet.create({
    container: {        
        flex: 1,         
        alignItems:"center",        
        backgroundColor:"#F0F4EF",                                
    },     
    inputContainer: {
        paddingVertical:10,
        alignItems:"center",
        width:"80%",
        backgroundColor:"#14591d",
        borderRadius:10,   
    },
    title: {
        paddingTop: "25%",
        fontSize: 35,
    },    
    sub: {
        fontSize:14,        
    },
    subLink: {
        padding:5,
        fontSize:14,
        color:"red"
    },
})

export default Login
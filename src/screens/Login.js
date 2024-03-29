import { View , StyleSheet, Text, Pressable} from "react-native"
import { useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useLoginMutation } from "../app/services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../utils/validations/authSchema";
import LoginWith from "../Components/LoginWith";
import { insertSession } from "../utils/db";

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
            insertSession(data);
            dispatch(setUser({email:data.email, idToken:data.idToken, localId:data.localId})); 
        } catch (error) {
            setErrorEmail("");
            setPassword("");            
            switch(error.path) {
                case "email": setErrorEmail(error.message);
                    break
                case "password": setErrorPassword(error.message);
                    break               
                default:console.log(error)
                    break
            }
        }        
    }

    return (
        <View style={styles.container}>      
            <Text style={styles.title} >Inicio de sesion</Text>
            <View style={styles.inputContainer}>
                <InputForm      
                    iconName="alternate-email"                 
                    value={email}
                    onChangeText={(t) => setEmail(t)}  
                    isSecure={false}     
                    error={errorEmail}
                    placeholder="Email ID"          
                />
                <InputForm 
                    iconName="lock-outline"
                    value={password}
                    onChangeText={(t) => setPassword(t)}                    
                    isSecure={true}    
                    error={errorPassword}
                    placeholder="Contraseña"                     
                />                           
                <SubmitButton title='Ingresar' onPress={() => onSubmit()}/>
                <View style={styles.subcontainer}><Text>O ingresa con ...</Text></View>
                <LoginWith/>
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
        marginTop: "30%",
    },     
    inputContainer: {
        paddingVertical:10,
        alignItems:"center",
        width:"80%",        
        borderRadius:10,   
    },
    title: {
        paddingVertical: "10%",
        fontSize: 30,
    },   
    subcontainer: {
        padding: 30,
    },
    sub: {
        paddingTop:30,
        fontSize:14,        
    },
    subLink: {
        padding:5,
        fontSize:14,
        color:"red"
    },
})

export default Login
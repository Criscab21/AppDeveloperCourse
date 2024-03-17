import { View , StyleSheet, Text, Pressable} from "react-native"
import { useState } from "react";
import InputForm from "../Components/InputForm";
import SubmitButton from "../Components/SubmitButton";
import { useRegisterMutation } from "../app/services/auth";
import { setUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { registerSchema } from "../utils/validations/authSchema";
import LoginWith from "../Components/LoginWith";
import { deleteSession, insertSession } from "../utils/db";

const Register = ({navigation}) => { 
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerRegister] = useRegisterMutation();
    const dispatch = useDispatch();     
    
    const onSubmit = async () => {
        try {
            registerSchema.validateSync({email, password, confirmPassword});
            const {data} = await triggerRegister({ email, password });
            deleteSession();
            insertSession(data);      
            dispatch(setUser({email:data.email, idToken:data.idToken, localId: data.localId}));  
            navigation.navigate("Login");                  
        } catch (error) {
            setErrorEmail("");
            setPassword("");
            setConfirmPassword("");
            switch(error.path) {
                case "email": setErrorEmail(error.message);
                    break
                case "password": setErrorPassword(error.message);
                    break
                case "confirmPassword": setErrorConfirmPassword(error.message);
                    break
                default:
                    break
            }
        }
    }

    return (
        <View style={styles.container}>      
            <Text style={styles.title} >Registro</Text>
            <View style={styles.inputContainer}>
                <InputForm     
                    iconName="alternate-email"                  
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    placeholder="Email"      
                    isSecure={false}
                    error={errorEmail}             
                />
                <InputForm
                    iconName="lock-outline" 
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    placeholder="Contraseña"
                    isSecure={true}   
                    error={errorPassword}                             
                />                           
                <InputForm
                    iconName="lock-outline" 
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    placeholder="Confirmar contraseña"
                    isSecure={true}
                    error={errorConfirmPassword}                                
                />                           
                <SubmitButton title='Registro' onPress={() => {
                        onSubmit();                        
                    }}/>   
                <View style={{padding: 30}}><Text style={{fontSize:14}}>O registrate con ...</Text></View>
                <LoginWith/>
                <Text style={styles.sub}>Ya tenes cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Inicio de sesion</Text>
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
    sub: {
        paddingTop:30,
        fontSize:14,     
    },
    subLink: {
        padding:5,
        fontSize:14,
        color:"orange"
    },
})

export default Register
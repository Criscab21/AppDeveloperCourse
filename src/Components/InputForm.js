import { TextInput, StyleSheet, View, Text } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'

const InputForm = ( {iconName, value, onChangeText, isSecure, error, placeholder}) => {
    return (
        <View style={styles.inputCard}>
            <MaterialIcons name={iconName} size={18}/>            
            <TextInput
                placeholder={placeholder}
                value={value} 
                onChangeText={onChangeText} 
                style={styles.input}
                secureTextEntry={isSecure}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}               
        </View>
    )
}

const styles = StyleSheet.create({
    inputCard: {
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:"gray",
        width: "100%",
        marginBottom:25,        
    },  
    input: {
        paddingHorizontal:5,
    },
    error: {        
        fontSize:14,
        color:"red",
        top:3,
    },  
})

export default InputForm
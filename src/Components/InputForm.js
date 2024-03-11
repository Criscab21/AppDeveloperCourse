import { TextInput, StyleSheet, View, Text } from "react-native"

const InputForm = ( {label, value, onChangeText, isSecure, error}) => {
    return (
        <View style={styles.inputCard}>
            <Text style={styles.titleInput}>{label}</Text>
            <TextInput 
                value={value} 
                onChangeText={onChangeText} 
                style={styles.input}
                secureTextEntry={isSecure}
            />
            {error ? <View><Text style={styles.error}>{error}</Text></View> : null}               
        </View>
    )
}

const styles = StyleSheet.create({
    inputCard: {
        width: "100%",
        paddingBottom: 15,
    },
    titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:16,
    },
    input: {        
        width:"90%",
        borderWidth:0,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        padding:2,
        marginHorizontal:"5%",
        marginVertical:10,        
    },
    error: {
        textAlign:"center",
        fontSize:14,
        color:"red"
    },  
})

export default InputForm
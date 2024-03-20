import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../utils/globals/colors";

export const ValidationTextInput = ({props, onHandlerPrice}) => {
    const [text, setText] = useState();    
  
    onChangeText = (text) => {
        const numericText = text.replace(/[^0-9]/g, '');
        setText(numericText); 
        onHandlerPrice(text);
    }

    return (
        <TextInput 
            style={styles.textInput}
            onChangeText={this.onChangeText}                
            value={text}
            {...props}
            keyboardType='numeric'
            placeholder="Ingrese el monto"
            placeholderTextColor={"#0a210f"}
        />            
    );
}

const styles = StyleSheet.create({
    textInput: {
        textAlign: 'center',        
        backgroundColor: colors.shadowCircle,
        borderRadius: 10,
        width:"45%",
        borderBottomWidth: 1,       
        marginHorizontal:"10%",
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,           
    },
    msg: {
        color:"red",
    }
})
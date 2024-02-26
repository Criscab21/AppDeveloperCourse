import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export const ValidationTextInput = ({props, onHandlerPrice}) => {
    const [text, setText] = useState();    
  
    onChangeText = (text) => {
        const numericText = text.replace(/[^0-9]/g, '');
        setText(numericText); 
        onHandlerPrice(text);
    }

    return (
        <View style={styles.container}>            
            <TextInput 
                onChangeText={this.onChangeText}                
                value={text}
                {...props}
                keyboardType='numeric'
                placeholder="Ingrese el monto"
                placeholderTextColor={"#0a210f"}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:"80%",
        borderWidth:2,
        borderColor:"black",
        marginHorizontal:"10%",
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,
        alignSelf:"stretch",        
    },
    msg: {
        color:"red",
    }
})
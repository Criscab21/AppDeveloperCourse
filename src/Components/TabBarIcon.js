import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function TabBarIcon ({title, nameIcon, color, focused}) {
    return (
        <View style={[styles.container, focused && styles.focusedContainer]} >
            <FontAwesome name={nameIcon} size={20} color={color}/>
            <Text style={[styles.text, focused && styles.textFocused]}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',        
        width:100,        
        
    },
    text:{
        fontSize:18,
    },
    textFocused:{
        color:'silver',
        fontSize:19,                
    },
    focusedContainer: {        
        borderWidth:1,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderColor:"silver",        
    }
})
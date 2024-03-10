import { Pressable, Text, StyleSheet } from "react-native"

const AddButton = ({title, onPress}) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"green",
        width:"70%",
        paddingVertical:8,
        margin:10
    },
    text:{
        color:"silver",
        textAlign:"center",
        fontSize:18
    }
})
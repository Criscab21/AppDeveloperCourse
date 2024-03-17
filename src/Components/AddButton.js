import { Pressable, Text, StyleSheet } from "react-native"
import { colors } from "../utils/globals/colors"

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
        backgroundColor: colors.cadetGrayTertiaryColor,        
        width:"90%",
        paddingVertical:8,
        margin:10
    },
    text:{
        color: colors.redArrowDown,
        textAlign:"center",
        fontSize:14
    }
})
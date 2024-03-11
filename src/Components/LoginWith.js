import { Pressable, StyleSheet, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'

const LoginWith = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Pressable style={styles.icon}>
                    <MaterialCommunityIcons name={"google"} size={40} color={"orange"}/>                
                </Pressable >
            </View>
            <View style={styles.iconContainer}>
                <Pressable style={styles.icon}>
                    <MaterialCommunityIcons name={"facebook"} size={40} color={"blue"}/>                
                </Pressable>
            </View>
            <View style={styles.iconContainer}>
                <Pressable style={styles.icon}>
                    <MaterialCommunityIcons name={"twitter"} size={40} color={"skyblue"}/>                
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    iconContainer: {
        borderWidth:2,
        borderRadius:10,
        borderColor:"silver",
        marginHorizontal:25,
    },
    icon: {
        paddingHorizontal:10
    },
})

export default LoginWith
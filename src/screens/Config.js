import { Text, View, StyleSheet, Pressable } from "react-native"
import { colors } from "../utils/globals/colors"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"


const Config = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <Pressable>
                    <Text style={styles.title}>Ajustes</Text>
                </Pressable>
            </View>
                <Pressable onPress={() => navigation.navigate("EditProfile")} style={styles.subtitleContainer}>
                    <MaterialCommunityIcons name="account-edit" size={20}/>
                    <Text style={styles.subtitle}>Editar perfil</Text>
                </Pressable>
            
                <Pressable style={styles.subtitleContainer}>
                    <MaterialCommunityIcons name="security" size={20}/>
                    <Text style={styles.subtitle}>Seguridad</Text>
                </Pressable>
            
                <Pressable style={styles.subtitleContainer}>
                    <MaterialCommunityIcons name="bell-alert" size={20}/>
                    <Text style={styles.subtitle}>Notificaciones</Text>
                </Pressable>
            
                <Pressable style={styles.subtitleContainer}>
                    <MaterialCommunityIcons name="lock" size={20}/>
                    <Text style={styles.subtitle}>Privacidad</Text>
                </Pressable>
        </View>
    )
}

export default Config

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingTop: 15,        
        backgroundColor: colors.lavenderSecundaryColor,
    },
    subtitleContainer:{
        flexDirection: 'row',
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: colors.shadowCircle,
    },
    title: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    subtitle: {
        paddingHorizontal: 5,
        fontSize: 16,
    },
})
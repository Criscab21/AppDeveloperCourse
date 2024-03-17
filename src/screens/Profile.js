import { View, StyleSheet, Image, Text } from "react-native"
import { useSelector } from "react-redux";
import { colors } from "../utils/globals/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Profile = () => {         
    const value = useSelector((state) => state.auth.value);
       
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={value.imageCamera ? {uri:value.imageCamera}:require("../../assets/user.png")}
                    style={styles.image}
                    resizeMode='cover'
                    />
            </View>
            <View style={{marginTop: 10}}>
                <View style={{flexDirection:'column', marginBottom: 10,}}>
                    <View style={{flexDirection: 'row', marginHorizontal: 15,}}>
                        <MaterialCommunityIcons name="google" size={35}/>
                        <View style={{paddingLeft: 10}}>
                            <Text style={styles.text}>Nombre</Text>
                            <Text style={styles.subText}>{value.userName}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:'column', marginBottom: 10,}}>
                    <View style={{flexDirection: 'row', marginHorizontal: 15,}}>
                        <MaterialCommunityIcons name="email-send" size={35}/>
                        <View style={{paddingLeft: 10}}>
                            <Text style={styles.text}>Direccion de corre electronico</Text>              
                            <Text style={styles.subText}>{value.email}</Text>
                        </View>
                    </View>
                </View>
            </View> 
        </View>
    )    
}

export default Profile

const styles = StyleSheet.create({
    container:{       
        flex:1,
        paddingTop:20,
        backgroundColor: colors.lavenderSecundaryColor,
    },
    imageContainer: {
        alignItems: "center",
    },
    image:{        
        borderWidth:2,
        borderColor:"black",
        borderRadius:100,        
        width:150,
        height:150
    },
    text: {      
        fontSize: 15,
        color: "gray",
    },
    subText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.licoricePrincipalText,
    },
})


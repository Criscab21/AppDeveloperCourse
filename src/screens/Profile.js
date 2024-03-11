import { View, StyleSheet, Image } from "react-native"
import AddButton from "../Components/AddButton"
import { useSelector } from "react-redux";

const Profile = ({navigation}) => {         
    const image = useSelector((state) => state.auth.value.imageCamera);
       
    return (
        <View style={styles.container}> 
            <Image
                source={image ? {uri:image}:require("../../assets/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            <AddButton title={"Cambiar imagen de perfil"} onPress={() => navigation.navigate("ImageSelector")}/>                        
        </View>
    )    
}

export default Profile

const styles = StyleSheet.create({
    container:{        
        flex:1,
        alignItems:"center",
        paddingTop:20
    },
    image:{
        borderWidth:2,
        borderColor:"black",
        borderRadius:100,        
        width:200,
        height:200
    }
})


import { useEffect, useState } from "react"
import { Image, StyleSheet, View } from "react-native";
import AddButton from "../Components/AddButton";
import * as ImagePicker from 'expo-image-picker'
import { useGetImageQuery, usePutImaGeMutation } from "../app/services/profile";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";

const ImageSelector = ({navigation}) => {
    const [image, setImage] = useState("");    
    const [triggerProfileImage] = usePutImaGeMutation();
    const localId = useSelector((state) => state.auth.value.localId);
    const { data, isSuccess } = useGetImageQuery(localId);    
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(isSuccess && data) setImage(data.image);
    },[isSuccess, data])

    const pickImage = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if(granted) {
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing:true,
                aspect:[4,3],
                quality:0.3,
                base64:true
            })
            if(!result.canceled){
                setImage('data:image/jpeg;base64,' + result.assets[0].base64)
            }
        }        
    }

    const confirmImage = () => {        
        triggerProfileImage ({image, localId});
        dispatch(setCameraImage(image));
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Image
                source={image ? { uri:image } : require("../../assets/user.png")}
                style={styles.image}
                resizeMode="cover"
            />
            <AddButton title="Tomar foto" onPress={pickImage}/>
            <AddButton title="Confirmar foto" onPress={confirmImage}/>
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image: {
        borderWidth:2,
        borderColor:"black",
        borderRadius:100,        
        width:200,
        height:200
    }
})
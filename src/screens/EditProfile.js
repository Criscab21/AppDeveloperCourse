import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AddButton from "../Components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { colors } from "../utils/globals/colors";
import { setNameUser } from "../features/auth/authSlice";


const EditProfile = () => {
    const navigation = useNavigation();
    const value = useSelector((state) => state.auth.value);
    const [modalVisible, setModalVisible] = useState(false);
    const [newUserName, setNewUserName] = useState("");
    const dispatch = useDispatch();

    return (
        <View style={styles.mainContainer}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                statusBarTranslucent={true}
                onRequestClose={() => {
                    Alert.alert('Cambiar Nombre');
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textTitle}>Cambiar Nombre</Text>
                        <View style={{width: "100%"}}>
                            <TextInput
                                value={newUserName}
                                style={styles.modalInput}
                                onChangeText={setNewUserName}
                                placeholder="Nombre de usuario"
                                placeholderTextColor={"#0a210f"}
                            />
                        </View>
                        <View style={{width: '100%',flexDirection: 'row-reverse', marginTop: 10}}>
                            <Pressable style={[styles.button]} 
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    dispatch(setNameUser(newUserName));
                                    }}>
                                    <Text style={styles.text}>ACEPTAR</Text>
                            </Pressable>
                            <Pressable style={[styles.button]} 
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setNewUserName('');
                                    }}>
                                    <Text style={styles.text}>CANCELAR</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Text style={{fontWeight: 'bold', color: colors.licoricePrincipalText, fontSize: 21,}}>Yo</Text>
            <Pressable style={styles.textContainer} onPress={() => setModalVisible(true)}>
                <Text style={styles.title}>Nombre</Text>
                <Text style={styles.subtitle}>{value.userName}</Text>
            </Pressable>
            <Pressable style={styles.textContainer}>
                <Text style={styles.title}>Correo Electronico</Text>
                <Text style={styles.subtitle}>{value.email}</Text>
            </Pressable>
            <Pressable style={styles.textContainer} onPress={() => navigation.navigate('ImageSelector')}>
                <Text style={styles.title}>Fotografia</Text>                
            </Pressable>            
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.lavenderSecundaryColor,
        height: "100%",
        paddingTop: 20,
        paddingHorizontal: 20,        
    },
    textContainer: {
        marginVertical: 20,        
        borderBottomWidth: 1,
        borderBottomColor: colors.cadetGrayTertiaryColor,
    },
    title: {
        fontSize: 18,        
        color: colors.licoricePrincipalText,
    },
    subtitle: {
        fontSize: 15,
        color: "gray",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,        
    },
    modalView: {
        borderWidth: 3,
        borderColor: 'black',
        width: '85%',
        height: '20%',
        padding: "5%",        
        backgroundColor: colors.lavenderSecundaryColor,
        borderRadius: 4,        
        alignItems: 'flex-start',
        shadowColor: colors.shadowCircle,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {        
        padding: 10,       
    },   
    text: {     
        color: colors.redArrowDown   
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: '2%',
    },
    modalInput: {          
        backgroundColor: colors.shadowCircle,            
        borderBottomWidth: 1, 
    }
})

export default EditProfile
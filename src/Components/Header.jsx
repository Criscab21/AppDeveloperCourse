import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import {useFonts} from "expo-font";
import fonts, { fontCollection } from '../utils/globals/fonts';
import { AntDesign } from '@expo/vector-icons';

export const Header = ({isLog}) => {

    const nav = useNavigation();
    const [fontsLoaded] = useFonts(fontCollection);
    if(!fontsLoaded) return null;

    if(isLog) {
        return(
            <View style={styles.headercontainer}>
                <View style={styles.titleContainer}>
                    <View style={styles.menu}>
                        <Pressable onPress={ ()=> nav.dispatch(DrawerActions.openDrawer())}>
                            <AntDesign name='menu-fold' size={25} color={'#b4cded'}/>
                        </Pressable>
                    </View>           
                    <View style={styles.title}>
                        <Pressable >                        
                            <Text style={styles.textLog}>
                                Gestor de Gastos
                            </Text>
                        </Pressable>
                    </View>
                </View>             
            </View>
        )
    } else {
        return(
            <View style={styles.headercontainer}>
                <View style={styles.titleContainer}>
                    <View style={styles.menu}>
                        
                    </View>           
                    <View style={styles.title}>
                        <Pressable >                        
                            <Text style={styles.text}>
                                Gestor de Gastos
                            </Text>
                        </Pressable>
                    </View>
                </View>             
            </View>
        )
    }    
}


const styles = StyleSheet.create({
    headercontainer: {
        minWidth:"100%",
        backgroundColor:"#F0F4EF",
        paddingBottom:10,                           
    },     
    titleContainer: {        
        flexDirection:"row", 
        height: 80,         
        backgroundColor:"#14591d",        
        alignItems:"center",        
    },
    title: {
        marginRight:"25%"
    },
    menu: {
        top: 10,
        padding:"3%"
    },
    arrowleft: {        
        top: 10,
    },
    linksContainer: {      
        paddingHorizontal:"1%",         
        backgroundColor:"#14591d",                      
        flexDirection:"row",              
        alignItems:"center", 
        paddingBottom:"2%",
        gap:30
    },
    linkText: {    
        borderColor:"#F0F4EF",
        borderWidth:1,                 
        borderBottomWidth:0,  
        color:"#b4cded",
        alignContent:"center",
        fontSize:18,       
        paddingHorizontal:"15%",
        fontFamily:fonts.DosisBold
    }, 
    linktextfocused: {
        borderColor:"#F0F4EF",
        borderWidth:0,
        borderBottomWidth: 1,
        color:"white",        
    },  
    textLog:{                         
        height:"100%",
        color:"#b4cded",
        fontSize:30,  
        top: 5,
        left: 50,  
        textAlignVertical:"center",  
        fontFamily:fonts.DosisBold     
    },    
    text: {
        height:"100%",
        color:"#b4cded",
        fontSize:30,  
        top: 5,
        left: 70,  
        textAlignVertical:"center",  
        fontFamily:fonts.DosisBold     
    }
  });
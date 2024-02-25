import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import fonts, { fontCollection } from '../utils/globals/fonts';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export const Header = ({navigation}) => {

    const [fontsLoaded] = useFonts(fontCollection);
    if(!fontsLoaded) return null;

    return(
        <View style={styles.headercontainer}>
            <View style={styles.titleContainer}>
                <View style={styles.arrowleft}>
                    {navigation.canGoBack() && 
                        <Pressable onPress={() => navigation.goBack()}>
                            <AntDesign name='arrowleft' size={25} color={'silver'}/>
                        </Pressable>
                        }                    
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


const styles = StyleSheet.create({
    headercontainer: {          
        minWidth:"100%",
        backgroundColor:"#F0F4EF",         
        borderWidth:3,                     
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
    arrowleft: {
        width:"7%",
        paddingLeft:"1%"
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
    text:{                         
        height:"100%",
        color:"#b4cded",
        fontSize:30,  
        marginLeft:"25%",  
        textAlignVertical:"center",  
        fontFamily:fonts.DosisBold     
    },    
  });
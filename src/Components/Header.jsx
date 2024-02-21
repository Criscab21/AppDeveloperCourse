import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import {useFonts} from "expo-font";
import fonts, { fontCollection } from '../utils/globals/fonts';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export const Header = ({navigation}) => {

    const [fontsLoaded] = useFonts(fontCollection);
    if(!fontsLoaded) return null;

    return(
        <View style={styles.headercontainer}>
            <View style={styles.title}>
                {navigation.canGoBack() && 
                    <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name='arrowleft' size={25} color={'silver'}/>
                    </Pressable>
                    }
                <Pressable >                        
                    <Text style={styles.text}>
                        Gestor de Gastos
                    </Text>
                </Pressable>
            </View>
            <View style={styles.linksContainer}>
                <Pressable onPress={() => navigation.navigate("Home")}>                        
                    <Text style={styles.linkText}>Gastos</Text>                                
                </Pressable>                
                <Pressable onPress={() => navigation.navigate("HomeIngresos")}>
                    <Text style={styles.linkText}>Ingresos</Text>                
                </Pressable>
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
    title: {
        paddingHorizontal:"3%",
        flexDirection:"row", 
        height: 80,         
        backgroundColor:"#14591d",        
        alignItems:"center",        
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
    text:{                         
        height:"100%",
        color:"#b4cded",
        fontSize:30,  
        marginLeft:"25%",  
        textAlignVertical:"center",  
        fontFamily:fonts.DosisBold     
    },    
  });
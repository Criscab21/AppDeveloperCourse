import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import PieChartHome from './PieChartHome';
import {useFonts} from "expo-font";
import fonts, { fontCollection } from '../utils/globals/fonts';
import { useState } from 'react';
import Gastos from './Gastos';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'

export default function Home () {

    const [flag, setFlag] = useState("home");
    const [fontsLoaded] = useFonts(fontCollection);
    if(!fontsLoaded) return null;

    const switchView = (f) => {
        setFlag(f)
    }
    

    switch(flag) {
        case "home":
            return(              
                <View style={styles.container}>
                    <View style={styles.title}>
                        <View style={styles.titleGestorHome}>                            
                            <Pressable onPress={() => switchView("home")}>                        
                                <Text style={styles.text}>
                                    Gestor de Gastos
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.linksContainer}>
                        <Pressable onPress={() => switchView("home")}>                        
                            <Text style={styles.linkText}>Gastos</Text>                                
                        </Pressable>                
                        <Pressable>
                            <Text style={styles.linkText}>Ingresos</Text>                
                        </Pressable>
                    </View>
                    <View style={styles.piechartcontainer}>                        
                        <View>
                            <PieChartHome/>
                        </View>                                   
                        <View style={styles.plusButtonContainer}>                    
                            <Pressable onPress={() => switchView("gastos")}>
                                <MaterialCommunityIcons name='plus-circle-multiple' size={45} color="green"/>
                            </Pressable>            
                        </View>
                    </View>
                </View>
            )            
        // case "mostrargastos":
        //     break;
        case "gastos":
            return(
                <View style={styles.container}>
                    <View style={styles.title}>
                        <View>                            
                            <Pressable onPress={()=>switchView("home")}>                        
                                <Entypo name="back" size={30} color="#F0F4EF"/>
                            </Pressable>                                               
                        </View>
                        <View style={styles.titleGestor}>                            
                            <Pressable onPress={()=>switchView("home")}>                        
                                <Text style={styles.text}>
                                    Gestor de Gastos
                                </Text>
                            </Pressable>                    
                        </View>
                    </View>
                    <View style={styles.linksContainer}>                    
                        <Pressable>                        
                            <Text style={styles.linkText}>Gastos</Text>                                
                        </Pressable> 
                                       
                        <Pressable>
                            <Text style={styles.linkText}>Ingresos</Text>                
                        </Pressable>
                    </View>
                    <Gastos/>
                </View>
            )            
        default: 
            return(              
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Pressable onPress={() => switchView("home")}>                        
                            <Text style={styles.text}>
                                Gestor de Gastos
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.linksContainer}>
                        <Pressable onPress={() => switchView("home")}>                        
                            <Text style={styles.linkText}>Gastos</Text>                                
                        </Pressable>                
                        <Pressable>
                            <Text style={styles.linkText}>Ingresos</Text>                
                        </Pressable>
                    </View>
                    <View style={styles.piechartcontainer}>                        
                        <View>
                            <PieChartHome/>
                        </View>                                   
                        <View style={styles.plusButtonContainer}>                    
                            <Pressable onPress={() => switchView("gastos")}>
                                <MaterialCommunityIcons name='plus-circle-multiple' size={45} color="green"/>
                            </Pressable>            
                        </View>
                    </View>
                </View>
            )
    }                  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,          
        minWidth:"100%",
        backgroundColor:"#F0F4EF",         
        borderWidth:2,                     
    }, 
    titleGestor: {
        marginLeft:"10%",
    },   
    titleGestorHome: {
        marginLeft:"20%",
    },   
    piechartcontainer:{
        paddingHorizontal:"10%",
        marginHorizontal:"10%",        
        borderWidth:1,        
        backgroundColor: "gray",
        borderRadius:20
    },
    title: {
        paddingHorizontal:"5%",
        flexDirection:"row", 
        height:70,         
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
        textAlignVertical:"center",  
        fontFamily:fonts.DosisBold     
    },
    plusButtonContainer:{ 
        borderRadius:50,
        backgroundColor:"gold",
        borderWidth:1,
        borderColor:"gold",
        paddingLeft:"1%",
        marginLeft:"70%",
        marginBottom:"2%",
        marginRight:"8%",
    }
  });
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import PieChartHome from './PieChartHome';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function HomeIngresos ({navigation}) {   
        
    return(             
        <View style={styles.container}>            
            <View style={styles.piechartcontainer}>
                <PieChartHome title="Ingresos"/>
                <View style={styles.plusButtonContainer}>                    
                    <Pressable onPress={() => navigation.navigate("Ingresos")}>
                        <MaterialCommunityIcons name='plus-circle-multiple' size={45} color="green"/>
                    </Pressable>            
                </View>
            </View>                                   
        </View>        
    )                     
}

const styles = StyleSheet.create({
    container: {
        flex: 1,          
        minWidth:"100%",
        backgroundColor:"#F0F4EF",         
        borderWidth:2,                     
    },     
    piechartcontainer:{
        paddingHorizontal:"10%",
        marginHorizontal:"10%",        
        borderWidth:1,        
        backgroundColor: "gray",
        borderRadius:20
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
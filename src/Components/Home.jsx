import { TextInput, View, Button, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import PieChartHome from './PieChartHome';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';
import { deleteSpendItem } from '../features/spend/spendSlice'
import { subsCategories } from '../features/categories/categoriesSlice';


export default function Home ({navigation}) {     

    const spents = useSelector((state)=> state.spends);
    const dispatch = useDispatch();        

    return(             
        <View style={styles.container}>            
            <View style={styles.piechartcontainer}>
                <PieChartHome title="Gastos" color="red"/>                
                <View style={styles.plusButtonContainer}>                    
                    <Pressable onPress={() => navigation.navigate("Gastos")}>
                        <MaterialCommunityIcons name='plus-circle-multiple' size={45} color="green"/>
                    </Pressable>    
                </View>                    
            </View>            
            <ScrollView style={styles.scrollView}>
                {spents.items.map((item) => {  
                    return (
                        <View style={styles.card}>
                            <View style={styles.textCard}>
                                <Text style={styles.text}>
                                    Titulo: {item.name}                                
                                </Text>
                                <Text style={styles.text}>
                                    Categoria: {item.category}                                
                                </Text>
                                <Text style={styles.text}>
                                    $ {item.price}                                
                                </Text>
                            </View>
                            <View>
                                <Pressable onPress={() => {
                                        dispatch(deleteSpendItem(item))
                                        dispatch(subsCategories(item))
                                        } }>
                                    <FontAwesome name='trash' size={30}/>
                                </Pressable>
                            </View>
                        </View>
                        )
                })}                        
            </ScrollView>            
        </View>        
    )                     
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,          
        minWidth:"100%",
        backgroundColor:"#F0F4EF",                             
    },     
    scrollView: {
        marginBottom:"26%",        
        paddingVertical:10 ,
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
    },
    card: {
        borderWidth:1,        
        backgroundColor: "gray",
        borderRadius:20,
        alignItems:"center",        
        paddingVertical:5,
        marginBottom:20,
        marginHorizontal:"10%",

    },    
    textCard: {
        alignItems:'center'
    },
    text: {
        color:"#b4cded",
        fontSize: 15,
    }
  });
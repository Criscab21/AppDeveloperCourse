import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import PieChartHome from './PieChartHome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector} from 'react-redux';
import { deleteIncomeItem } from '../features/income/incomeSlice';
import { subsCategories } from '../features/incomeCategories/incomeCategoriesSlice';

export default function HomeIngresos ({navigation}) {
    
    const income = useSelector((state) => state.income);
    const dispatch = useDispatch();   
        
    return(             
        <View style={styles.container}>            
            <View style={styles.piechartcontainer}>
                <PieChartHome title="Ingresos" color="green"/>
                <View style={styles.plusButtonContainer}>                    
                    <Pressable onPress={() => navigation.navigate("Ingresos")}>
                        <MaterialCommunityIcons name='plus-circle-multiple' size={45} color="green"/>
                    </Pressable>            
                </View>
            </View>
            <ScrollView style={styles.flatlistCard}>                
                {income.items.map((item) => {
                    return (
                        <View key={item.name} style={styles.card}>
                            <View style={styles.textCard}>
                                <Text style={styles.text}>
                                    {item.category}                                
                                </Text>
                                <Text style={styles.text}>
                                    $ {item.price}                          
                                </Text>
                            </View>
                            <View>
                                <Pressable onPress={() => {
                                        dispatch(deleteIncomeItem(item))
                                        dispatch(subsCategories(item))
                                        }}>              
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
    flatlistCard: {
        marginBottom:"26%",        
        paddingVertical:10 ,
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
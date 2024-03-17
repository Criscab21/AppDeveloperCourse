import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector} from 'react-redux';
import { deleteIncomeItem } from '../features/income/incomeSlice';
import { subsCategories } from '../features/incomeCategories/incomeCategoriesSlice';
import PieChartHome from '../Components/PieChartHome';
import { colors } from '../utils/globals/colors';

export default function HomeIngresos ({navigation}) {
    
    const categories = useSelector((state) => state.incomeCategories.incomeCategories)
    const income = useSelector((state) => state.income);
    const dispatch = useDispatch();   
        
    return(             
        <View style={styles.container}>            
            <View style={styles.piechartcontainer}>
                <View style={{     
                    borderRadius: 20,
                    marginTop: 10,                 
                    backgroundColor: colors.shadowCircle,
                }}>
                    <PieChartHome title="Ingresos" color="#018E42" total={income.value} categories={categories}/>
                </View>
                
                <View style={styles.plusButtonContainer}>                    
                    <Pressable onPress={() => navigation.navigate("Ingresos")}>
                        <MaterialCommunityIcons name='plus-circle' size={65} color={colors.plusCircle}/>
                    </Pressable>            
                </View>
            </View>
            <ScrollView style={styles.scrollView}>                
                {income.items.map((item) => {
                    return (
                        <View key={item.id} style={styles.card}>
                            <View style={styles.textCard}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={[{}, styles.text]}>
                                        {item.category}
                                    </Text>
                                    <View style={[styles.iconContainer, {backgroundColor:item.color}]}>
                                        <MaterialCommunityIcons name={item.iconName} size={10} color={"white"}/>
                                    </View>
                                </View>         
                                <Text style={styles.text}>
                                    $ {item.price}                          
                                </Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Pressable onPress={() => {
                                        dispatch(deleteIncomeItem(item))
                                        dispatch(subsCategories(item))
                                        }}>              
                                    <FontAwesome name='trash' size={30} color={colors.licoriceSecundaryText}/>
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
        backgroundColor: colors.lavenderSecundaryColor,                             
    },     
    scrollView: {
        marginBottom:"26%",        
        paddingVertical:10 ,        
    },
    piechartcontainer:{
        paddingHorizontal:"10%",
        marginHorizontal:"10%",
        borderRadius: 100,  
    },        
    plusButtonContainer:{         
        borderRadius:50,
        alignSelf: 'center',
    },
    card: {        
        shadowOpacity: 0.8,
        shadowRadius: 12,
        shadowColor: colors.licoricePrincipalText,        
        shadowRadius: 1,
        elevation: 5,  
        borderRadius:20,                
        paddingVertical:5,
        marginBottom:20,
        marginHorizontal:"10%",
        backgroundColor: colors.cadetGrayTertiaryColor,

    },    
    textCard: {        
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    text: {
        color: colors.licoriceSecundaryText,
        fontSize: 15,
        paddingHorizontal: 10,
    },
    iconContainer: {                
        width: 20,   
        height: 20,   
        borderWidth:1,        
        borderRadius:100, 
    },
}
)
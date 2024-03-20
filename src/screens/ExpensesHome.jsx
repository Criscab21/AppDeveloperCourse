import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';
import { deleteSpendItem } from '../features/spend/spendSlice'
import { subsCategories } from '../features/categories/categoriesSlice';
import PieChartHome from '../Components/PieChartHome';
import { colors } from '../utils/globals/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function ExpensesHome ({navigation}) {     

    const categories = useSelector((state) => state.categories.categories)
    const expenses = useSelector((state)=> state.spends);
    const dispatch = useDispatch(); 
    
    
    return(             
        <View style={styles.container}>            
            <View style={styles.piechartcontainer}>
                <View style={{ 
                    borderRadius: 20,
                    width: "90%",
                    backgroundColor: colors.componentBackground,
                }}>
                    <PieChartHome 
                        title="Gastos" 
                        color={colors.redArrowDown} 
                        total={expenses.value} 
                        categories={categories} 
                        navigation={navigation} 
                        navigateTo={"Expenses"}
                    /> 
                </View>
            </View>            
            <ScrollView style={styles.scrollView}>
                {expenses.items.map((item) => {  
                    return (
                        <Pressable key={item.id} style={styles.card} onPress={() => navigation.navigate("DetailExpenses")}>
                            <View style={styles.textCard}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.text}>
                                        {item.category}
                                    </Text>     
                                    <View style={[styles.iconContainer, {backgroundColor: item.color}]}>
                                        <MaterialCommunityIcons name={item.iconName} size={20} color={"white"}/>
                                    </View>
                                </View>                               
                                <Text style={[{}, styles.text]}>
                                    $ {item.amount}                                
                                </Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Pressable onPress={() => {
                                        dispatch(deleteSpendItem(item));
                                        dispatch(subsCategories(item));
                                        } }>
                                    <FontAwesome name='trash' size={30} color={colors.licoriceSecundaryText}/>
                                </Pressable>
                            </View>
                        </Pressable>
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
        alignItems: 'center',
        marginTop: 20,         
    },        
    card: {        
        alignSelf: 'center',
        shadowOpacity: 0.8,
        shadowRadius: 12,
        shadowColor: colors.licoricePrincipalText,        
        shadowRadius: 1,
        elevation: 5,  
        borderRadius: 20,               
        paddingVertical:5,
        marginBottom:20,
        width: "90%",     
        backgroundColor: colors.componentBackground,

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
        alignItems: 'center',        
        width: 25,   
        height: 25,   
        borderWidth:1,        
        borderRadius:100, 
    },
}
)
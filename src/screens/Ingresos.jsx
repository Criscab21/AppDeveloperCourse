import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addIncomeItem } from '../features/income/incomeSlice';
import { plusCategories } from '../features/incomeCategories/incomeCategoriesSlice';
import { ValidationTextInput } from '../Components/ValidationTextInput';
import { colors } from '../utils/globals/colors';
import Categories from '../Components/Categories';


export default function Ingresos ({navigation}) {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.incomeCategories.incomeCategories)

    const [newIncome, setNewIncome] = useState({        
        price: "",        
        category: "",
        id: ""
    })          

    const onHandlerPrice = (p) => {
        const id = uuid.v4();
        setNewIncome({...newIncome, price:p, id:id});
    }

    const onHandlerCategory = (c) => {
        setNewIncome({...newIncome, category:c})        
        
    }

    return (
        
        <View style={styles.container}>                                                
            <View>
                <View style={{alignItems: 'center'}}>
                    <ValidationTextInput                    
                        regex={/^\d{3}-\d{3-\d{4}$/}  
                        onHandlerPrice={onHandlerPrice}                                   
                    />        
                </View>                   
                <View>
                    <Categories selectCategory={onHandlerCategory} categories={categories}/>  
                </View>                   
                <View style={{marginTop: "15%", marginHorizontal: "15%"}}>
                    <Pressable onPress={() =>{
                        dispatch(addIncomeItem(newIncome)); 
                        dispatch(plusCategories(newIncome));             
                        navigation.goBack();
                        }}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Añadir ingreso</Text>               
                        </View>
                    </Pressable>      
                </View>                   

            </View>               
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {        
        flex: 1,                  
        backgroundColor:colors.lavenderSecundaryColor,                        
        paddingTop: 20,
    },         
    input: {
        width:"80%",
        borderWidth:2,
        borderColor:"black",
        marginHorizontal:"10%",
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,
    },
    button:{        
        backgroundColor: colors.plusCircle,
        height:30,        
        borderRadius:4,         
    },
    text: {
        textAlign:"center",
        color:"black",
        fontSize: 15,   
    }, 
})
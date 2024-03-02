import { useState } from 'react'
import { TextInput, View, Button, Text, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import { addIncomeItem } from '../features/income/incomeSlice';
import { ValidationTextInput } from './ValidationTextInput';
import IncomeCategories from './IncomeCategories';
import { plusCategories } from '../features/incomeCategories/incomeCategoriesSlice';



export default function Ingresos ({navigation}) {

    const dispatch = useDispatch();

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
            <View style={styles.inputCard}>                     
                <ValidationTextInput                    
                    regex={/^\d{3}-\d{3-\d{4}$/}  
                    onHandlerPrice={onHandlerPrice}                                   
                />        
                <IncomeCategories selectCategory={onHandlerCategory}/>      
                <Button title='Añadir Ingreso' onPress={() => {
                    dispatch(addIncomeItem(newIncome));
                    dispatch(plusCategories(newIncome));                    
                    navigation.goBack();
                    }}/>
            </View>               
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {        
        flex: 1,          
        minWidth:"100%",
        backgroundColor:"#F0F4EF",                             
    },     
    inputCard: {
        width: "100%",
        paddingBottom: 15,
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
     
})
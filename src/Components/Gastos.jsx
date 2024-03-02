import { useState } from 'react'
import { TextInput, View, Button, Text, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addSpendItem } from '../features/spend/spendSlice'
import { ValidationTextInput } from './ValidationTextInput';
import Categories from './Categories';
import { plusCategories } from '../features/categories/categoriesSlice';


export default function Gastos ({navigation}) {    

    const dispatch = useDispatch();

    const [newSpent, setNewSpent] = useState({
        name: "",
        price: "",
        paymentMethod: "",
        category: "",
        id: ""
    })
    
    const onHandlerTitle = (t) => {
        const id = uuid.v4();
        setNewSpent({...newSpent, name:t, id:id});
    }

    const onHandlerPrice = (p) => {
        setNewSpent({...newSpent, price:p});
    }

    const onHandlerPayment = (p) => {
        setNewSpent({...newSpent, paymentMethod:p});
    }

    const onHandlerCategory = (c) => {
        setNewSpent({...newSpent, category:c})                
    }   

    return (        
        <View style={styles.container}>                                                
            <View style={styles.inputCard}>
                <TextInput 
                    style={styles.input}                    
                    value={newSpent.name} 
                    onChangeText={onHandlerTitle} 
                    placeholder='Ingrese el gasto' 
                    placeholderTextColor={"#0a210f"}
                />            
                <ValidationTextInput                    
                    regex={/^\d{3}-\d{3-\d{4}$/}  
                    onHandlerPrice={onHandlerPrice}                                   
                />                         
                <Categories selectCategory = {onHandlerCategory}/>                
                <Button title='Añadir transaccion' onPress={() => {
                    dispatch(addSpendItem(newSpent)); 
                    dispatch(plusCategories(newSpent));              
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
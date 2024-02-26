import { useState } from 'react'
import { TextInput, View, Button, Text, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import categories from '../utils/data/categories.json';
import { useDispatch } from 'react-redux';
import { addIncomeItem } from '../features/income/incomeSlice';


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
                <TextInput 
                    style={styles.input} 
                    value={newIncome.price} 
                    onChangeText={onHandlerPrice} 
                    placeholder='ARS' 
                    placeholderTextColor={"#0a210f"}
                />            
                <TextInput 
                    style={styles.input} 
                    value={newIncome.category} 
                    onChangeText={onHandlerCategory} 
                    placeholder='Ingrese la categoria' 
                    placeholderTextColor={"#0a210f"}
                />            
                <Button title='Añadir Ingreso' onPress={() => {
                    dispatch(addIncomeItem(newIncome));
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
import { useState } from 'react'
import { TextInput, View, Text, StyleSheet, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import { addSpendItem } from '../features/spend/spendSlice'
import Categories from '../Components/Categories';
import { plusCategories } from '../features/categories/categoriesSlice';
import { ValidationTextInput } from '../Components/ValidationTextInput';


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
                <Pressable onPress={() =>{
                    dispatch(addSpendItem(newSpent)); 
                    dispatch(plusCategories(newSpent));              
                    navigation.goBack();
                    }}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Añadir transaccion</Text>               
                    </View>
                </Pressable>                
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
    button:{
        textAlign:"center",
        backgroundColor:"gold",
        height:30,
        position:'absolute',
        borderRadius:15,        
        left:100,
        right:100,            
    },
    text: {
        textAlign:"center",
        color:"black",
        fontSize: 15,   
    }, 
})
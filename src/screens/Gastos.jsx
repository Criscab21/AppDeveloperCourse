import { useState } from 'react'
import { TextInput, View, Text, StyleSheet, Pressable, KeyboardAvoidingView } from 'react-native'
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addSpendItem } from '../features/spend/spendSlice'
import Categories from '../Components/Categories';
import { plusCategories } from '../features/categories/categoriesSlice';
import { ValidationTextInput } from '../Components/ValidationTextInput';
import { colors } from '../utils/globals/colors';


export default function Gastos ({navigation}) {    

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.categories)

    const [newSpent, setNewSpent] = useState({
        name: "",
        price: "",
        paymentMethod: "",
        category: "",
        id: ""
    })
    
    const onHandlerTitle = (t) => {        
        setNewSpent({...newSpent, name:t});
    }

    const onHandlerPrice = (p) => {
        const id = uuid.v4();
        setNewSpent({...newSpent, price:p, id:id});
    }

    const onHandlerPayment = (p) => {
        setNewSpent({...newSpent, paymentMethod:p});
    }

    const onHandlerCategory = (c) => {
        setNewSpent({...newSpent, category:c})                
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
                <View style={{alignItems: 'center'}}>
                    <TextInput 
                        style={styles.input}                    
                        value={newSpent.name} 
                        onChangeText={onHandlerTitle} 
                        placeholder='Comentario' 
                        placeholderTextColor={"#0a210f"}
                    />   
                </View>                                  
                <View>
                    <Categories selectCategory = {onHandlerCategory} categories={categories}/>
                </View>
                <View style={{marginTop: "15%", marginHorizontal: "15%"}}>
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
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,                  
        backgroundColor:colors.lavenderSecundaryColor,
        paddingTop: 15,
    },    
    input: {
        textAlign: 'center',        
        backgroundColor: colors.shadowCircle,
        borderRadius: 10,
        width:"80%",
        borderBottomWidth: 1,    
        marginVertical:5,
        paddingVertical:5,   
        marginHorizontal:"10%",               
    },  
    button:{                
        backgroundColor: colors.plusCircle,
        height:30,        
        borderRadius:5,  
    },
    text: {
        textAlign:"center",
        color:"black",
        fontSize: 15,   
    }, 
})
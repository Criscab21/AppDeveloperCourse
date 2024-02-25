import { useState } from 'react'
import { TextInput, View, Button, Text, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import categories from '../utils/data/categories.json';
import { FontAwesome } from '@expo/vector-icons'


export default function Gastos () {          
        
    const [newSpent, setNewSpent] = useState({
        title: "",
        price: "",
        paymentMethod: "",
        category: "",
        id: ""
    })

    const [spents, setSpent] = useState([])
    
    const checkCategory = (c) => {
        if(c === categories) {
            
        }
    }

    const addSpent = () => {        
        setSpent([...spents, newSpent])
        setNewSpent({
            title: "",
            price: "",
            paymentMethod: "",
            category: "",
            id: ""
        })          
    }

    const onHandlerTitle = (t) => {
        const id = uuid.v4();
        setNewSpent({...newSpent, title:t, id:id});
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

    const deleteItem = (id) => {
        setSpent(spents.filter(spent => spent.id != id));
        console.log(`El gasto ${id} ha sido eliminado`);
    }

    return (
        
        <View style={styles.container}>                                                
            <View style={styles.inputCard}>
                <TextInput 
                    style={styles.input} 
                    value={newSpent.title} 
                    onChangeText={onHandlerTitle} 
                    placeholder='Ingrese el gasto' 
                    placeholderTextColor={"#0a210f"}
                />            
                <TextInput 
                    style={styles.input} 
                    value={newSpent.price} 
                    onChangeText={onHandlerPrice} 
                    placeholder='Ingrese el monto' 
                    placeholderTextColor={"#0a210f"}
                />            
                <TextInput 
                    style={styles.input} 
                    value={newSpent.category} 
                    onChangeText={onHandlerCategory} 
                    placeholder='Ingrese la categoria' 
                    placeholderTextColor={"#0a210f"}
                />            
                <Button title='Añadir transaccion' onPress={addSpent}/>
            </View>
            <ScrollView style={styles.flatlistCard}>
                <FlatList
                    data={spents}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <View style={styles.textcard}>
                                <Text style={styles.text}>
                                    Titulo: {item.title}                                
                                </Text>
                                <Text style={styles.text}>
                                    Categoria: {item.category}                                
                                </Text>
                                <Text style={styles.text}>
                                    Precio: $ {item.price}                                
                                </Text>
                            </View>
                            <View>
                                <Pressable onPress={() => deleteItem(item.id)}>                                                           
                                    <FontAwesome name='trash' size={30}/>
                                </Pressable>
                            </View>
                        </View>
                    )}
                />      
            </ScrollView>            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,          
        minWidth:"100%",
        backgroundColor:"#F0F4EF",         
        borderWidth:2,                        
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

    },    
    textCard: {
        alignItems:'center'
    },
    text: {
        color:"#b4cded",
        fontSize: 15,
    }
})
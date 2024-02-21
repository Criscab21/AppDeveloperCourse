import { useState } from 'react'
import { TextInput, View, Button, Text, ScrollView, FlatList, StyleSheet, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import categories from '../utils/data/categories.json';


export default function Ingresos () {
    const [newSpent, setNewSpent] = useState({        
        price: "",        
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
            price: "",            
            category: "",
            id: ""
        })          
    }

    const onHandlerPrice = (p) => {
        const id = uuid.v4();
        setNewSpent({...newSpent, price:p, id:id});
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
                    value={newSpent.price} 
                    onChangeText={onHandlerPrice} 
                    placeholder='ARS' 
                    placeholderTextColor={"#0a210f"}
                />            
                <TextInput 
                    style={styles.input} 
                    value={newSpent.category} 
                    onChangeText={onHandlerCategory} 
                    placeholder='Ingrese la categoria' 
                    placeholderTextColor={"#0a210f"}
                />            
                <Button title='Añadir Ingreso' onPress={addSpent}/>
            </View>
            <ScrollView style={styles.flatlistCard}>
                <FlatList
                    data={spents}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View style={styles.card}>                            
                            <Text style={styles.textCard}>
                                Categoria: {item.category}                                
                            </Text>
                            <Text style={styles.textCard}>
                                {item.price} $                         
                            </Text>
                            <Pressable>                                                           
                                <Button title='DEL' onPress={() => deleteItem(item.id)}/>
                            </Pressable>
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
        marginBottom:"10%",        
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
    buttonCard: {
        marginVertical: 2,        
    },  
    textCard: {
        color:"#b4cded",
        fontSize: 15,
    },
})
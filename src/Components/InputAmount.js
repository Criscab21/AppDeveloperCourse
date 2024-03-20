import { TextInput, View, Text, StyleSheet, Pressable, KeyboardAvoidingView } from 'react-native'
import Categories from '../Components/Categories';
import { ValidationTextInput } from '../Components/ValidationTextInput';
import { colors } from '../utils/globals/colors';
import { useDispatch } from 'react-redux';


const InputAmount = ({onHandlerAmount, onHandlerComentary, item, onHandlerCategory, categories, text, navigation, addItem, plusCategory}) => {

    const dispatch = useDispatch()

    return (        
        <View style={styles.container}>                                                
            <View>
                <View style={{alignItems: 'center'}}>
                    <ValidationTextInput                    
                        regex={/^\d{3}-\d{3-\d{4}$/}  
                        onHandlerPrice={onHandlerAmount}                                   
                    />  
                </View>                                  
                <View style={{alignItems: 'center'}}>
                    <TextInput 
                        style={styles.input}                    
                        value={item.name} 
                        onChangeText={onHandlerComentary} 
                        placeholder='Comentario' 
                        placeholderTextColor={"#0a210f"}
                    />   
                </View>                                  
                <View>
                    <Categories 
                        onHandlerCategory={onHandlerCategory}                        
                        categories={categories}
                        />
                </View>
                <View style={{marginTop: "15%", marginHorizontal: "15%"}}>
                    <Pressable onPress={() =>{
                        dispatch(addItem(item)); 
                        dispatch(plusCategory(item));                                                         
                        navigation.goBack();
                        }}>
                        <View style={styles.button}>
                            <Text style={styles.text}>{text}</Text>               
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

export default InputAmount
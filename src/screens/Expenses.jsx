import { useState } from 'react'
import { StyleSheet } from 'react-native'
import uuid from 'react-native-uuid';
import { useSelector } from 'react-redux';
import { colors } from '../utils/globals/colors';
import InputAmount from '../Components/InputAmount';
import { addSpendItem } from '../features/spend/spendSlice';
import { plusCategories } from '../features/categories/categoriesSlice';


export default function Expenses ({navigation}) {    
    
    const categories = useSelector((state) => state.categories.categories)

    const [newSpent, setNewSpent] = useState({
        comentary: "",
        amount: "",
        paymentMethod: "",
        category: "",
        color: "",
        iconName: "",
        id: ""
    })
    
    const onHandlerComentary = (t) => {        
        setNewSpent({...newSpent, comentary:t});
    }

    const onHandlerAmount = (p) => {
        const id = uuid.v4();
        setNewSpent({...newSpent, amount:p, id:id});
    }

    const onHandlerPayment = (p) => {
        setNewSpent({...newSpent, paymentMethod:p});
    }

    const onHandlerCategory = (c, i, co) => {
        setNewSpent({...newSpent, category:c, iconName:i, color: co});
    }   

    return (    
        <InputAmount 
            onHandlerAmount={onHandlerAmount} 
            onHandlerComentary={onHandlerComentary} 
            onHandlerCategory={onHandlerCategory} 
            item={newSpent} 
            categories={categories} 
            text={"Añadir Gasto"}
            navigation={navigation}
            addItem={addSpendItem}
            plusCategory={plusCategories}
        />                
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
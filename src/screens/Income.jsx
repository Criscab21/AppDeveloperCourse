import { useState } from 'react'
import { StyleSheet } from 'react-native'
import uuid from 'react-native-uuid';
import { useSelector } from 'react-redux';
import { colors } from '../utils/globals/colors';
import InputAmount from '../Components/InputAmount';
import { addIncomeItem } from '../features/income/incomeSlice';
import { plusCategories } from '../features/incomeCategories/incomeCategoriesSlice';



export default function Income ({navigation}) {

    const categories = useSelector((state) => state.incomeCategories.incomeCategories)

    const [newIncome, setNewIncome] = useState({        
        comentary: "",
        amount: "",
        paymentMethod: "",
        category: "",
        color: "",
        iconName: "",
        id: ""
    })          

    const onHandlerComentary = (t) => {        
        setNewIncome({...newIncome, comentary:t});
    }

    const onHandlerAmount = (p) => {
        const id = uuid.v4();
        setNewIncome({...newIncome, amount:p, id:id});
    }

    const onHandlerPayment = (p) => {
        setNewIncome({...newIncome, paymentMethod:p});
    }

    const onHandlerCategory = (c, i, co) => {
        setNewIncome({...newIncome, category:c, iconName:i, color: co});
    }   

    return (
        <InputAmount
            onHandlerAmount={onHandlerAmount} 
            onHandlerComentary={onHandlerComentary} 
            onHandlerCategory={onHandlerCategory}             
            item={newIncome} 
            categories={categories} 
            text={"Añadir Ingreso"}
            navigation={navigation}
            addItem={addIncomeItem}
            plusCategory={plusCategories}
        />     
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
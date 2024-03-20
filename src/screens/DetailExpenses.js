import { Text, View } from "react-native"
import { useSelector } from "react-redux"

const DetailExpenses = ({navigation}) => {

    const expenses = useSelector((state) => state.spends);    

    return(
        <View style={{alignItems:'center', alignContent: 'center'}}>
            <View>
                <Text style={{fontSize: 50}}>{expenses.items.category}</Text>
            </View>
        </View>
    )
}

export default DetailExpenses
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../Components/Header';
import DetailExpenses from '../screens/DetailExpenses';
import Expenses from '../screens/Expenses';
import ExpensesHome from '../screens/ExpensesHome';


const Stack = createNativeStackNavigator();

export default function ExpensesNavigator () {
    return (
        <>
            <Stack.Navigator                
                screenOptions={({route, navigation}) => {                    
                    return {
                        header: () => <Header navigation={navigation}/>                       
                    }
                }}
                >
                <Stack.Screen name="HomeExpenses" component={ExpensesHome}/>
                <Stack.Screen name="Expenses" component={Expenses}/>                
                <Stack.Screen name="DetailExpenses" component={DetailExpenses}/>                
            </Stack.Navigator>
        </>
    )
}
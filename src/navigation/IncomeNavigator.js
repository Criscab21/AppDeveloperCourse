import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from '../Components/Header';
import IncomeHome from "../screens/IncomeHome";
import Income from "../screens/Income";

const Stack = createNativeStackNavigator ();

export default function IncomeNavigator () {
    return (
        <>
            <Stack.Navigator                
                screenOptions={({route, navigation}) => {                    
                    return {
                        header: () => <Header navigation={navigation}/>                        
                    }
                }}
            >
                <Stack.Screen name="IncomeHome" component={IncomeHome}/>
                <Stack.Screen name="Income" component={Income}/>
            </Stack.Navigator>
        </>
    )
}
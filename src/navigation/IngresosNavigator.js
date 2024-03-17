import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from '../Components/Header';
import HomeIngresos from "../screens/HomeIngresos";
import Ingresos from "../screens/Ingresos";

const Stack = createNativeStackNavigator ();

export default function IngresosNavigator () {
    return (
        <>
            <Stack.Navigator                
                screenOptions={({route, navigation}) => {                    
                    return {
                        header: () => <Header navigation={navigation}/>
                        
                    }
                }}
            >
                <Stack.Screen name="HomeIngresos" component={HomeIngresos}/>
                <Stack.Screen name="Ingresos" component={Ingresos}/>
            </Stack.Navigator>
        </>
    )
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../Components/Header';
import HomeGastos from '../screens/HomeGastos';
import Gastos from '../screens/Gastos';

const Stack = createNativeStackNavigator();

export default function GastosNavigator () {
    return (
        <>
            <Stack.Navigator                
                screenOptions={({route, navigation}) => {                    
                    return {
                        header: () => <Header navigation={navigation}/>                       
                    }
                }}
                >
                <Stack.Screen name="HomeGastos" component={HomeGastos}/>
                <Stack.Screen name="Gastos" component={Gastos}/>                
            </Stack.Navigator>
        </>
    )
}
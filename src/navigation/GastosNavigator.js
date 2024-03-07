import Home from '../Components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gastos from '../Components/Gastos';
import { Header } from '../Components/Header';



const Stack = createNativeStackNavigator();

export default function GastosNavigator () {
    return (
        <>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={({route}) => {
                    return {
                        header: ({navigation}) => {
                            return <Header navigation={navigation}/>
                        }
                    }
                }}
                >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Gastos" component={Gastos}/>                
            </Stack.Navigator>
        </>
    )
}
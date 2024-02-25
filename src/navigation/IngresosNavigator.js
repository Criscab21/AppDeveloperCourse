import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Header } from '../Components/Header';
import HomeIngresos from "../Components/HomeIngresos";
import Ingresos from "../Components/Ingresos";

const Stack = createNativeStackNavigator ();

export default function IngresosNavigator () {
    return (
        <>
            <Stack.Navigator
                initialRouteName="HomeIngresos"
                screenOptions={({route}) => {
                    return {
                        header: ({navigation}) => {
                            return <Header navigation={navigation}/>
                        }
                    }
                }}
            >
                <Stack.Screen name="HomeIngresos" component={HomeIngresos}/>
                <Stack.Screen name="Ingresos" component={Ingresos}/>
            </Stack.Navigator>
        </>
    )
}
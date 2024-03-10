import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../Components/Header";
import Config from "../screens/Config";

const Stack = createNativeStackNavigator()
const ConfigStack = () => {
    return(
        <Stack.Navigator
            initialRouteName="Config"
            screenOptions={({route}) => {
                return {
                    header : (navigation) => {
                        return <Header navigation={navigation}/> 
                    }
                }
            }}
        >
            <Stack.Screen name="Config" component={Config}/>
        </Stack.Navigator>
    )
}

export default ConfigStack
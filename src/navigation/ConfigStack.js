import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../Components/Header";
import Config from "../screens/Config";
import EditProfile from "../screens/EditProfile";
import ImageSelector from "../screens/ImageSelector"

const Stack = createNativeStackNavigator()
const ConfigStack = () => {
    return(
        <Stack.Navigator            
            screenOptions={({route,navigation}) => {
                return {
                    header : () => <Header navigation={navigation}/> 
                }
            }}
        >
            <Stack.Screen name="Config" component={Config}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="ImageSelector" component={ImageSelector}/>
        </Stack.Navigator>
    )
}

export default ConfigStack
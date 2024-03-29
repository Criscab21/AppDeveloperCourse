import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../Components/Header";
import Profile from "../screens/Profile";
import ImageSelector from "../screens/ImageSelector";
import { useGetImageQuery } from "../app/services/profile";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../features/auth/authSlice";
import { useEffect } from "react";

const Stack = createNativeStackNavigator()
const ProfileStack = () => {

    const localId = useSelector((state) => state.auth.value.localId);
    const { data, isSuccess } = useGetImageQuery(localId);
    const dispatch = useDispatch();

    useEffect(() => {                
        if(isSuccess && data) dispatch(setCameraImage(data.image));
    },[isSuccess, data]);

    return(
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={() => {
                return {
                    header : () => <Header/> 
                }
            }}
        >
            <Stack.Screen name="Profile" component={Profile}/>            
        </Stack.Navigator>
    )
}

export default ProfileStack
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
            screenOptions={({route}) => {
                return {
                    header : (navigation) => {
                        return <Header navigation={navigation}/> 
                    }
                }
            }}
        >
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="ImageSelector" component={ImageSelector}/>
        </Stack.Navigator>
    )
}

export default ProfileStack
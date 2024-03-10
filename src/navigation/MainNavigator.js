import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import Menu from '../screens/Menu';


export const MainNavigator = () => {

  const user = useSelector((state) => state.auth.value);
  
  return (
    <>
      { <NavigationContainer>
        {user.idToken ? <Menu/> : <AuthStack/>}        
      </NavigationContainer> }
    </>
  )
}
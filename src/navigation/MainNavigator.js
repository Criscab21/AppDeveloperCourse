import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchSession } from '../utils/db';
import { setUser } from '../features/auth/authSlice';
import Menu from '../screens/Menu';


export const MainNavigator = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.value);
  
  useEffect(() => {
    (
      async () => {
        const session = await fetchSession()        
        if(session.rows.length) {
          const user = session.rows._array[0]
          dispatch(setUser(user))          
        }        
      })()
  },[])

  return (
    <>
      { <NavigationContainer>
        {user.idToken ? <Menu/> : <AuthStack/>}         
      </NavigationContainer> }
    </>
  )
}
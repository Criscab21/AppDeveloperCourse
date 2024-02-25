import { NavigationContainer } from '@react-navigation/native';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import GastosNavigator from './GastosNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresosNavigator from './IngresosNavigator';
import TabBarIcon from '../Components/TabBarIcon';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {

  return (
    <>
      { <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Gastos'
          screenOptions={{
            headerShown:false,
            tabBarStyle: Styles.tabbar,
            tabBarShowLabel:false,           
          }
          }
        >
          <Tab.Screen 
            name='Gastos' 
            component={GastosNavigator}
            options={{
              tabBarIcon: ({focused}) => {
                return <TabBarIcon title={'Gastos'} nameIcon={'level-down'} color={"red"} focused={focused}/>
              }
            }}
            />
          <Tab.Screen 
            name='Ingresos'
            component={IngresosNavigator}
            options={{
              tabBarIcon: ({focused}) => {
                return <TabBarIcon title={'Ingresos'} nameIcon={'level-up'} color={"gold"} focused={focused}/>
              }
            }}
            />
        </Tab.Navigator>
      </NavigationContainer> }
    </>
  )
}

const Styles = StyleSheet.create({
  tabbar: {
    backgroundColor:"#14591d",
    height:80,
    shadowColor:'silver',
    elevation:4,
    position:'absolute',
    borderRadius:15,
    bottom:25,
    left:20,
    right:20,        
  }
})
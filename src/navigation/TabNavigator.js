import GastosNavigator from './GastosNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresosNavigator from './IngresosNavigator';
import TabBarIcon from '../Components/TabBarIcon';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
          initialRouteName='GastosHome'
          screenOptions={{
            headerShown:false,
            tabBarStyle: Styles.tabbar,
            tabBarShowLabel:false,           
          }
          }
        >
          <Tab.Screen 
            name='GastosHome' 
            component={GastosNavigator}
            options={{
              tabBarIcon: ({focused}) => {
                return <TabBarIcon title={'Gastos'} nameIcon={'level-down'} color={"red"} focused={focused}/>
              }
            }}
            />
          <Tab.Screen 
            name='IngresosHome'
            component={IngresosNavigator}
            options={{
              tabBarIcon: ({focused}) => {
                return <TabBarIcon title={'Ingresos'} nameIcon={'level-up'} color={"gold"} focused={focused}/>
              }
            }}
            />
        </Tab.Navigator>
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

export default TabNavigator;
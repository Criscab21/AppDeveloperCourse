import GastosNavigator from './GastosNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresosNavigator from './IngresosNavigator';
import TabBarIcon from '../Components/TabBarIcon';
import { StyleSheet } from 'react-native';
import { colors } from '../utils/globals/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
          initialRouteName='GastosHome'
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,           
            tabBarStyle: Styles.tabbar,
          }
          }
        >
          <Tab.Screen 
            name='GastosHome' 
            component={GastosNavigator}
            options={{
              tabBarIcon: ({focused}) => {
                return <TabBarIcon title={'Gastos'} nameIcon={'level-down'} color={colors.redArrowDown} focused={focused}/>
              }
            }}
            />
          <Tab.Screen 
            name='IngresosHome'
            component={IngresosNavigator}
            options={{
              tabBarIcon: ({focused}) => {
                return <TabBarIcon title={'Ingresos'} nameIcon={'level-up'} color={colors.greenArrowUp} focused={focused}/>
              }
            }}
            />
        </Tab.Navigator>
    )
}

const Styles = StyleSheet.create({
  tabbar: {
    backgroundColor: colors.payneGrayPrincipalColor,    
    height:80,    
    position:'absolute', 
  }
})

export default TabNavigator;
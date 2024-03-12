import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../navigation/TabNavigator';
import ProfileStack from '../navigation/ProfileStack';
import ConfigStack from '../navigation/ConfigStack';
import DrawerContent from '../Components/DrawerContent';

const Drawer = createDrawerNavigator();

const Menu = () => {
    
    return (        
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>} 
            screenOptions={{
                headerShown:false
            }}>
            <Drawer.Screen name='Inicio' component={TabNavigator}/>            
            <Drawer.Screen name='Perfil' component={ProfileStack}/>            
            <Drawer.Screen name='Ajustes' component={ConfigStack}/>
        </Drawer.Navigator>       
    )
}

export default Menu
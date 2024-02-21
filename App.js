import { Button, StyleSheet, Text, View } from 'react-native';
import Home from './src/Components/Home';
import  HomeIngresos from './src/Components/HomeIngresos';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Gastos from './src/Components/Gastos';
import { Header } from './src/Components/Header';
import Ingresos from './src/Components/Ingresos';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (    
    <Home navigation={navigation}/>
  )
}

const HomeIngresosScreen = ({navigation}) => {
  return (
    <HomeIngresos navigation={navigation}/>
  )
}

const GastosScreen = () => {
  return (
    <Gastos/>
  )
}

const IngresosScreen = () => {
  return (
    <Ingresos/>
  )
}


export default function App() {    

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={({route}) => {
          return {
            header: ({navigation}) => {
              return <Header navigation={navigation}/>
            }
          }
        }}
        >        
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Gastos" component={GastosScreen}/>               
        <Stack.Screen name="Ingresos" component={IngresosScreen}/>               
        <Stack.Screen name="HomeIngresos" component={HomeIngresosScreen}/>               
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

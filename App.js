import {MainNavigator} from './src/navigation/MainNavigator';
import { StatusBar } from 'expo-status-bar'
import Home from './src/Components/Home';

export default function App() {    

  return (
    <>
      <StatusBar backgroundColor='#14591d'/>      
      <MainNavigator/>
    </>
  );
}



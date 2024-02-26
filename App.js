import {MainNavigator} from './src/navigation/MainNavigator';
import { StatusBar } from 'expo-status-bar';
import { store } from './src/app/store';
import { Provider } from 'react-redux';

export default function App() {    

  return (
    <>
      <StatusBar backgroundColor='#14591d'/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>
  );
}
import { MainNavigator } from './src/navigation/MainNavigator';
import { StatusBar } from 'expo-status-bar';
import { store } from './src/app/store';
import { Provider } from 'react-redux';
import { init } from './src/utils/db'
import { colors } from './src/utils/globals/colors';
import { useFonts } from 'expo-font';
import { fontCollection } from './src/utils/globals/fonts';

init();

export default function App() {    

  const [fontsLoaded] = useFonts(fontCollection);

  if(!fontsLoaded) return null

  return (
    <>
      <StatusBar backgroundColor={colors.payneGrayPrincipalColor}/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    </>
  );
}
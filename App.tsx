import 'react-native-gesture-handler';
import { Text, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import FadeScreen from './src/screens/FadeScreen';
import { GradiantContext, GradiantProvider } from './src/context/GradiantContext';

const AppState =({children}:any)=>{
  return(
    <GradiantProvider>
    {children}
  </GradiantProvider>
  )
  
}

const App = () =>{
  return(
    <NavigationContainer>
      <AppState>
          {/**<FadeScreen/>*/}
          <Navigation/>
      </AppState>
     
      
    </NavigationContainer>
  )
}
export default App
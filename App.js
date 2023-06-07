import { AppNavigation } from './src/navegation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App= ()=> {
  return (
    <>
      <NavigationContainer>
        <AppNavigation/>
      </NavigationContainer>
    </>
  );
};

export default App;
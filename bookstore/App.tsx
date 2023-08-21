import {StyleSheet} from 'react-native';
import Main from './Main';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Header from './src/ui/containers/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
export default App;

import {ScrollView, StyleSheet, View} from 'react-native';
import Main from './Main';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ScrollView style={styles.global}>
        <Main />
      </ScrollView>
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

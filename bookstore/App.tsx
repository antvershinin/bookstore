import {StyleSheet, View} from 'react-native';
import Main from './Main';
const App = () => {
  return (
    <View style={styles.global}>
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
export default App;

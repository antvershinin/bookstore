import {ScrollView, StyleSheet, View} from 'react-native';
import Main from './Main';
const App = () => {
  return (
    <ScrollView style={styles.global}>
      <Main />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
export default App;

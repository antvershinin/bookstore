import {StyleSheet, Text, View} from 'react-native';
import Header from './src/ui/containers/header/Header';
import Footer from './src/ui/containers/footer/Footer';

const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Text>MAIN PAGE</Text>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
});

export default Main;

import {StyleSheet, Text, View} from 'react-native';
import Footer from './src/ui/containers/footer/Footer';
import Header from './src/ui/containers/header/Header';
import LoginPage from './src/ui/pages/LoginSignupPage';

const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <LoginPage />
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

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Footer from '../containers/footer/Footer';
import Header from '../containers/header/Header';
import {ReactElement} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

type Props = {
  nav?: NativeStackScreenProps<RootStackParamList>;
  children: ReactElement;
};

const Layout = (props: Props) => {
  return (
    <ScrollView style={styles.global}>
      <View style={styles.container}>
        <Header navigation={props.nav!.navigation} route={props.nav!.route} />
        {props.children}
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  global: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    marginHorizontal: 15,
  },
});

export default Layout;

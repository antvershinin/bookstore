import {ScrollView, StyleSheet, View} from 'react-native';
import BookBanner from '../containers/book_banner/BookBanner';
import AuthBanner from '../containers/auth_banner/AuthBanner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Layout from './Layout';
import {userState} from '../../redux/selectors';

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({navigation, route}: Props) => {
  return (
    <Layout nav={{navigation, route}}>
      <>
        <BookBanner />
        {!userState ? (
          <AuthBanner navigation={navigation} route={route} />
        ) : null}
      </>
    </Layout>
  );
};

export default HomeScreen;

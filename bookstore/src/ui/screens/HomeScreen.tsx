import {ScrollView, StyleSheet, View} from 'react-native';
import BookBanner from '../containers/book_banner/BookBanner';
import AuthBanner from '../containers/auth_banner/AuthBanner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Layout from './Layout';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import GenreFilter from '../containers/filters/genre_filter/GenreFilter';

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({navigation, route}: Props) => {
  const userState = useSelector((state: RootState) => state.user.user);
  return (
    <Layout nav={{navigation, route}}>
      <>
        <BookBanner />
        {userState ? null : (
          <AuthBanner navigation={navigation} route={route} />
        )}
        <GenreFilter />
      </>
    </Layout>
  );
};

export default HomeScreen;

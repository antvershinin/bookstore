import {View} from 'react-native';
import BookBanner from '../containers/book_banner/BookBanner';
import AuthBanner from '../containers/auth_banner/AuthBanner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({navigation, route}: Props) => {
  return (
    <View>
      <BookBanner />
      <AuthBanner navigation={navigation} route={route} />
    </View>
  );
};

export default HomeScreen;

import {View} from 'react-native';
import BookBanner from '../containers/book_banner/BookBanner';
import AuthBanner from '../containers/auth_banner/AuthBanner';

type Props = {};

const HomePage: React.FC<Props> = props => {
  return (
    <View>
      <BookBanner />
      <AuthBanner />
    </View>
  );
};

export default HomePage;

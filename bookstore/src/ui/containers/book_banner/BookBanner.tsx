import {Image, Text, View} from 'react-native';
import {styles} from './BookBanner.styles';
import OvalButton from '../../components/buttons/oval_button/OvalButton';

type Props = {};

const BookBanner: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image_books}
        source={require('./images/books_images.png')}
      />
      <View style={styles.text_container}>
        <Text style={styles.text_container_title}>
          Build your library with us
        </Text>
        <Text style={styles.text_container_text}>
          Buy two books and get one for free
        </Text>
        <OvalButton
          text="Choose a book"
          styles={styles.text_container_button}
        />
      </View>
      <Image style={styles.image} source={require('./images/girl_image.png')} />
    </View>
  );
};

export default BookBanner;

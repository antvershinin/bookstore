import {Image, Text, View} from 'react-native';
import {styles} from './AuthBanner.styles';
import OvalButton from '../../components/buttons/oval_button/OvalButton';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

const AuthBanner: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image_fairy}
        source={require('./images/fairy_image.png')}
      />
      <View style={styles.text_container}>
        <Text style={styles.text_container_title}>Authorize now</Text>
        <Text style={styles.text_container_text}>
          Authorize now and discover the fabulous world of books
        </Text>
        <OvalButton
          onPress={() => navigation.navigate('SignIn', {hasAccoutn: false})}
          text="Log In/ Sign Up"
          styles={styles.text_container_button}
        />
      </View>
      <Image
        style={styles.image}
        source={require('./images/castle_image.png')}
      />
    </View>
  );
};

export default AuthBanner;

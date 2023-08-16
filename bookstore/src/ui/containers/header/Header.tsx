import {Image, Text, View} from 'react-native';
import {styles} from './Header.styles';
import OvalButton from '../../components/buttons/oval_button/OvalButton';
import Input from '../../components/input/Input';

const Header = () => {
  return (
    <>
      <View style={styles.header_container}>
        <Image
          style={styles.header_logo}
          source={require('./images/header_logo.png')}
        />
        <Text style={styles.header_text}>Catalog</Text>
        <OvalButton
          text="Log In/ Sign Up"
          text_style={{fontSize: 12}}
          styles={styles.header_button}
        />
      </View>
      <View>
        <Input
          logo_source={require('./images/search_logo.png')}
          placeholder={'Search'}
        />
      </View>
    </>
  );
};

export default Header;

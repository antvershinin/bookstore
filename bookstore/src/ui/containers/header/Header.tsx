import {Image, Text, View} from 'react-native';
import {styles} from './Header.styles';
import OvalButton from '../../components/buttons/oval_button/OvalButton';
import Input from '../../components/input/Input';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RoundButton from '../../components/buttons/round_button/RoundButton';

type Props = NativeStackScreenProps<RootStackParamList>;

const logged = false;

const Header: React.FC<Props> = ({navigation, route}) => {
  return (
    <>
      <View style={styles.header_container}>
        <Image
          style={styles.header_logo}
          source={require('./images/header_logo.png')}
        />
        <Text style={styles.header_text}>Catalog</Text>
        {logged ? (
          <OvalButton
            text="Log In/ Sign Up"
            text_style={{fontSize: 12}}
            styles={styles.header_button}
            onPress={() => navigation.navigate('SignIn', {hasAccoutn: true})}
          />
        ) : (
          <View style={styles.user_dashboard}>
            <RoundButton logo_source={require('./images/cart_logo.png')} />
            <RoundButton logo_source={require('./images/heart_logo.png')} />
            <RoundButton
              logo_source={require('./images/profile_logo.png')}
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        )}
      </View>
      <View>
        <Input
          logo_source={require('./images/search_logo.png')}
          placeholder={'Search'}
          onChangeText={function (text: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </View>
    </>
  );
};

export default Header;

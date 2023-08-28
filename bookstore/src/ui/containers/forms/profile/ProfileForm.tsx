import {Image, ScrollView, Text, View} from 'react-native';

import {styles} from './ProfileForm.styles';
import RoundButton from '../../../components/buttons/round_button/RoundButton';
import Input from '../../../components/input/Input';

type Props = {};

const ProfileForm = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatar_container}>
        <Image
          style={styles.avatar_image}
          source={require('../images/chelik.png')}
        />
        <RoundButton
          styles={styles.avatar_button}
          logo_source={require('../images/camera_logo.png')}
        />
      </View>
      <View style={styles.personal_container}>
        <View style={styles.password_head}>
          <Text style={styles.personal_title}>Personal information</Text>
          <Text style={styles.change_button}>Change information</Text>
        </View>
        <Input
          placeholder="Your name"
          value="Tony Lemony"
          onChangeText={() => {}}
          logo_source={require('../images/profile_logo.png')}
        />
        <Input
          placeholder="Your email"
          value="test@test.ru"
          onChangeText={() => {}}
          logo_source={require('../images/mail_logo.png')}
        />
      </View>
      <View>
        <View style={styles.password_head}>
          <Text style={styles.password_title}>Password</Text>
          <Text style={styles.change_button}>Change password</Text>
        </View>
        <Input
          logo_source={require('../images/hide_logo.png')}
          placeholder="Your password"
          onChangeText={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileForm;

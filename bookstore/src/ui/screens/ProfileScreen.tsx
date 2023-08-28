import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';
import Layout from './Layout';
import ProfileForm from '../containers/forms/profile/ProfileForm';

type Props = NativeStackScreenProps<RootStackParamList>;

const ProfileScreen = ({navigation, route}: Props) => {
  return (
    <Layout nav={{navigation, route}}>
      <ProfileForm />
    </Layout>
  );
};

export default ProfileScreen;

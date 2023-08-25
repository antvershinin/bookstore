import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';
import Layout from './Layout';

type Props = NativeStackScreenProps<RootStackParamList>;

const ProfileScreen = ({navigation, route}: Props) => {
  return (
    <Layout nav={{navigation, route}}>
      <View></View>
    </Layout>
  );
};

export default ProfileScreen;

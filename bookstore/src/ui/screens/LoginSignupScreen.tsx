import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LoginSignupForm from '../containers/forms/login_signup/LoginSignupForm';

import Layout from './Layout';

type Props = NativeStackScreenProps<RootStackParamList>;

const LoginSignupScreen = ({navigation, route}: Props) => {
  return (
    <Layout nav={{navigation, route}}>
      <>
        <LoginSignupForm navigation={navigation} route={route} />
      </>
    </Layout>
  );
};

export default LoginSignupScreen;

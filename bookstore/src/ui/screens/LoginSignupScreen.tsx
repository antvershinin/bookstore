import {NativeStackScreenProps} from '@react-navigation/native-stack';
import LoginSignupForm from '../containers/forms/LoginSignupForm';

import Layout from './Layout';

type Props = NativeStackScreenProps<RootStackParamList>;

const LoginSignupScreen = ({navigation, route}: Props) => {
  return (
    <Layout nav={{navigation, route}}>
      <>
        <LoginSignupForm />
      </>
    </Layout>
  );
};

export default LoginSignupScreen;

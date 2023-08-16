import {Image, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Input from '../../components/input/Input';
import OvalButton from '../../components/buttons/oval_button/OvalButton';
import {styles} from './Layout.styles';

interface Login {
  email: string;
  password: string;
  password_confirm?: string;
}

type Props = {
  hasAccount: boolean;
};

const LoginSignupLayout: React.FC<Props> = props => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<Login>();
  const onSubmit = (data: Login) => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.form_title}>
        {props.hasAccount ? 'Log In' : 'Sign Up'}
      </Text>
      <View style={styles.input_container}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          }}
          render={({field: {onChange, value}}) => (
            <Input
              type="email"
              onChangeText={onChange}
              logo_source={require('./images/mail_logo.png')}
              placeholder="Email"
              value={value}
            />
          )}
        />
        <Text style={styles.form_text}>Enter your email</Text>
      </View>
      <View style={styles.input_container}>
        <Controller
          rules={{required: true, minLength: 8, maxLength: 15}}
          name="password"
          control={control}
          render={({field: {onChange, value}}) => (
            <Input
              secure
              logo_source={require('./images/hide_logo.png')}
              placeholder="Password"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.form_text}>Enter your password</Text>
      </View>
      {props.hasAccount ? null : (
        <View style={styles.input_container}>
          <Controller
            rules={{required: true, minLength: 8, maxLength: 15}}
            name="password_confirm"
            control={control}
            render={({field: {onChange, value}}) => (
              <Input
                secure
                logo_source={require('./images/hide_logo.png')}
                placeholder="Password replay"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Text style={styles.form_text}>Enter your password</Text>
        </View>
      )}

      <OvalButton
        styles={styles.form_button}
        text={`${props.hasAccount ? 'Log In' : 'Sign Up'}`}
        onPress={handleSubmit(onSubmit)}
      />
      <Image source={require('./images/login_signup_image.png')} />
    </View>
  );
};

export default LoginSignupLayout;

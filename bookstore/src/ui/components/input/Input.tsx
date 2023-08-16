import {
  Image,
  ImageSourcePropType,
  InputModeOptions,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './Input.styles';

type Props = {
  logo_source: ImageSourcePropType;
  placeholder: string;
  styles?: ViewStyle;
  value?: string;
  onChangeText: (text: string) => void;
  type?: InputModeOptions;
  secure?: boolean;
};

const Input: React.FC<Props> = props => {
  const onChange = (text: string) => {
    props.onChangeText(text);
    props.value = text;
  };

  return (
    <View style={{...styles.input, ...props.styles}}>
      <Image style={styles.input_logo} source={props.logo_source} />
      <TextInput
        placeholderTextColor={'#B9BAC3'}
        secureTextEntry={props.secure}
        inputMode={props.type}
        onChangeText={onChange}
        style={styles.input_field}
        placeholder={props.placeholder}></TextInput>
    </View>
  );
};

export default Input;

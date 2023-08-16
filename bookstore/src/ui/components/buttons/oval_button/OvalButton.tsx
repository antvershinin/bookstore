import React from 'react';
import {styles} from './OvalButton.styles';
import {Pressable, Text, TextStyle, ViewStyle} from 'react-native';

type Props = {
  styles?: ViewStyle;
  onPress?: (value: any) => void;
  text_style?: TextStyle;

  text: string;
};

const OvalButton: React.FC<Props> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{...styles.oval_button, ...props.styles}}>
      <Text style={styles.button_text}>{props.text}</Text>
    </Pressable>
  );
};

export default OvalButton;

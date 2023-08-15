import React from 'react';
import {styles} from './OvalButton.styles';
import {Pressable, Text} from 'react-native';

type Props = {
  styles: {
    width: number;
    height: number;
    backgroundColor?: `#${string}`;
  };
  text_style: {
    fontSize: number;
  };
  text: string;
  onPress?: () => void;
};

const OvalButton: React.FC<Props> = props => {
  return (
    <Pressable
      style={{...styles.oval_button, ...props.styles}}
      onPress={props.onPress}>
      <Text style={styles.button_text}>{props.text}</Text>
    </Pressable>
  );
};

export default OvalButton;

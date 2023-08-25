import React from 'react';
import {styles} from './RoundButton.styles';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  onPress?: (value: any) => void;
  logo_source: ImageSourcePropType;
  styles?: ViewStyle;
  count?: number;
};

const RoundButton: React.FC<Props> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{...styles.round_button, ...props.styles}}>
      <Image source={props.logo_source} />
      {props.count ? (
        <View style={styles.count_label}>
          <Text style={styles.label_text}>{props.count}</Text>
        </View>
      ) : null}
    </Pressable>
  );
};

export default RoundButton;

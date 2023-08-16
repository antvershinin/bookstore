import {Image, Text, View} from 'react-native';
import {styles} from './Footer.styles';
const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footer_container}>
        <Image source={require('./images/footer_logo.png')} />
        <View style={styles.footer_contact}>
          <Text style={styles.footer_text}>tranthuy.nute@gmail.com</Text>
          <Text style={styles.footer_text}>(480) 555-0103</Text>
        </View>
        <View style={styles.footer_navigation}>
          <Text style={styles.footer_text}>Home Page</Text>
          <Text style={styles.footer_text}>Catalog</Text>
          <Text style={styles.footer_text}>My Account</Text>
          <Text style={styles.footer_text}>Cart</Text>
        </View>

        <View style={styles.footer_map}>
          <Text style={styles.footer_text}>
            6391 Elgin St. Celina, Delaware 10299
          </Text>
          <Image
            style={styles.footer_map_image}
            source={require('./images/footer_map.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Footer;

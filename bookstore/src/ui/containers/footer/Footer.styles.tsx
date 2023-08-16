import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    marginTop: 70,
    width: '100%',
    height: 650,
    backgroundColor: '#0D1821',
  },
  footer_container: {
    marginHorizontal: 15,
    marginTop: 73,
    flexDirection: 'column',
    gap: 40,
  },
  footer_logo: {
    width: 88.43,
    height: 46,
  },
  footer_contact: {
    flexDirection: 'column',
    gap: 5,
  },
  footer_navigation: {
    flexDirection: 'column',
    gap: 11,
  },
  footer_map: {
    marginBottom: 30,
  },
  footer_map_image: {
    alignSelf: 'center',
    width: '100%',
    height: 160,
  },
  footer_text: {
    color: '#F0F4EF',
    fontSize: 16,
    fontWeight: '500',
  },
});

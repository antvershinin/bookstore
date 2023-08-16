import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    width: '100%',
    height: 501,
    backgroundColor: '#F0F4EF',
    borderRadius: 16,
    alignItems: 'center',
  },

  text_container: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20,
  },
  text_container_title: {
    fontWeight: '700',
    fontSize: 18,
    color: '#0D1821',
  },
  text_container_text: {
    fontWeight: '500',
    fontSize: 14,
    color: '#344966',
  },
  text_container_button: {
    minHeight: 38,
    minWidth: 200,
  },
  image: {
    height: 282,
    width: 253,
    margin: 'auto',
    position: 'absolute',
    bottom: 0,
  },
  image_fairy: {
    position: 'absolute',
    marginTop: 17,
    alignSelf: 'flex-end',
  },
});

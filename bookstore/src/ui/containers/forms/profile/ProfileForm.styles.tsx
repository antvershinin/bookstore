import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 100,
  },
  avatar_container: {
    width: 320,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4EF',
    borderRadius: 16,
    alignSelf: 'center',
  },
  avatar_image: {
    width: '100%',
    height: '100%',
  },
  avatar_button: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  personal_container: {
    marginTop: 30,
    marginBottom: 30,
    gap: 10,
    flexDirection: 'column',
  },
  personal_head: {
    flexDirection: 'row',
  },
  personal_title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#0D1821',
    marginBottom: 10,
  },
  change_button: {
    fontWeight: '500',
    fontSize: 12,
    color: '#8D9F4F',
    textDecorationLine: 'underline',
  },
  password_head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  password_title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0D1821',
  },
});

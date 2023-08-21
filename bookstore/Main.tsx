import {StyleSheet} from 'react-native';

import LoginPage from './src/ui/pages/LoginSignupPage';
import HomeScreen from './src/ui/pages/HomeScreen';
import {Stack} from './src/navigation/Stack';

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={LoginPage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
});

export default Main;

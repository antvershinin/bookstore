import LoginSignupScreen from './src/ui/screens/LoginSignupScreen';
import HomeScreen from './src/ui/screens/HomeScreen';
import {Stack} from './src/navigation/Stack';
import ProfileScreen from './src/ui/screens/ProfileScreen';

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header(props) {
          return null;
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={LoginSignupScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default Main;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{
            title: "Register",
            headerShown: false,
          }}
        />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// The above code is similar to the following code:
// The following code is using destructuring to get the Navigator and Screen components from the createNativeStackNavigator function.

// const {Navigator, Screen} = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Navigator>
//         <Screen name="home" component={<HomeScreen />} />
//       </Navigator>
//     </NavigationContainer>
//   );
// }

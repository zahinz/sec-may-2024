import { Text, View } from "react-native";
import Button from "../component/Button";

const screenContainerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

function HomeScreen({ navigation }) {
  function goToLogin() {
    navigation.navigate("login");
  }

  function goToRegister() {
    navigation.navigate("register");
  }
  return (
    <View style={screenContainerStyle}>
      <Text>Home Screen</Text>
      <View>
        <Button onPress={goToLogin}>Go to Login</Button>
        <Button onPress={goToRegister}>Go to Register</Button>
      </View>
    </View>
  );
}

export default HomeScreen;

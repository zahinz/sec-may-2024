import { Text, View } from "react-native";
import Button from "../component/Button";

const screenContainerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

function LoginScreen({ navigation }) {
  function goToRegister() {
    navigation.navigate("register");
  }
  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={screenContainerStyle}>
      <Text>Login Screen</Text>
      <Button onPress={goToRegister}>Register</Button>
      <Button onPress={goBack}>Go Back</Button>
    </View>
  );
}

export default LoginScreen;

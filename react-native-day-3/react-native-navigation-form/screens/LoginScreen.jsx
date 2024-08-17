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

  return (
    <View style={screenContainerStyle}>
      <Text>Login Screen</Text>
      <Button variant="outline" onPress={goToRegister}>
        New user?
      </Button>
    </View>
  );
}

export default LoginScreen;

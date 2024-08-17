import { Text, View } from "react-native";
import Button from "../component/Button";

const screenContainerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

function RegisterScreen({ navigation }) {
  function goToLogin() {
    navigation.navigate("login");
  }
  return (
    <View style={screenContainerStyle}>
      <Text>Register Screen</Text>
      <Button onPress={goToLogin}>Login</Button>
    </View>
  );
}

export default RegisterScreen;

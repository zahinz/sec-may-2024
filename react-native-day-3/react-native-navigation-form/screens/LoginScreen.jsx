import { Dimensions, Text, View } from "react-native";
import Button from "../component/Button";
import Input from "../component/Input";
import Typography from "../component/Typography";

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
      <Typography.Header style={{ marginBottom: 16 }}>
        Login Screen
      </Typography.Header>
      <View style={{ gap: 16, marginBottom: 16 }}>
        <Input placeholder="zahin@mail.com" label="Email" />
        <Input placeholder="password" label="Password" />
        <Button>Login</Button>
      </View>
      <Button
        style={{ width: Dimensions.get("window").width * 0.9 }}
        variant="outline"
        onPress={goToRegister}
      >
        New user?
      </Button>
    </View>
  );
}

export default LoginScreen;

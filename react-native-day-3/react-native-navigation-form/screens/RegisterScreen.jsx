import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import Button from "../component/Button";
import Input from "../component/Input";

const screenContainerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

function RegisterScreen({ navigation }) {
  function goToLogin() {
    navigation.navigate("login");
  }

  const [data, setData] = useState({});
  function handleOnChange(key, value) {
    setData({
      ...data,
      [key]: value,
    });
  }
  function handleSubmit() {
    // check if password and confirmPassword are the same
    if (data.password !== data.confirmPassword) {
      alert("Password and Confirm Password must be the same");
      return;
    }
    console.log(data);
    // reset the form
    setData({});
  }
  return (
    <View style={screenContainerStyle}>
      <Text>Register Screen</Text>
      <View style={{ gap: 16, marginBottom: 16 }}>
        <Input
          placeholder="zahin@mail.com"
          label="Email"
          onChangeText={(value) => handleOnChange("email", value)}
          value={data?.email}
        />
        <Input
          placeholder="password"
          label="Password"
          onChangeText={(value) => handleOnChange("password", value)}
          value={data?.password}
        />
        <Input
          placeholder="password"
          label="Confirm Password"
          onChangeText={(value) => handleOnChange("confirmPassword", value)}
          value={data?.confirmPassword}
        />
        <Button onPress={handleSubmit}>Register</Button>
      </View>
      <Button
        style={{ width: Dimensions.get("window").width * 0.9 }}
        variant="outline"
        onPress={goToLogin}
      >
        Existing user?
      </Button>
    </View>
  );
}

export default RegisterScreen;

import { Dimensions, Text, View } from "react-native";
import Button from "../component/Button";
import Input from "../component/Input";
import Typography from "../component/Typography";
import { useForm, Controller } from "react-hook-form";

const screenContainerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

function LoginScreen({ navigation }) {
  function goToRegister() {
    navigation.navigate("register");
  }

  // react hook from
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <View style={screenContainerStyle}>
      <Typography.Header style={{ marginBottom: 16 }}>
        Login Screen
      </Typography.Header>
      <View style={{ gap: 16, marginBottom: 16 }}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: /^\S+@\S+$/i,
            maxLength: 30,
            minLength: 5,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="zahin@mail.com"
              label="Email"
              errorMessage={
                errors.email
                  ? errors.email.type === "required"
                    ? "This is required."
                    : errors.email.type === "pattern"
                    ? "Invalid email"
                    : errors.email.type === "maxLength"
                    ? "Max length is 30"
                    : errors.email.type === "minLength"
                    ? "Min length is 5"
                    : ""
                  : ""
              }
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="password"
              label="Password"
              errorMessage={errors.password && "This is required."}
            />
          )}
        />
        <Button onPress={handleSubmit(onSubmit)}>Login</Button>
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

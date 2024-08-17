import { TextInput, View, Dimensions, Text } from "react-native";

const inputContainer = {
  width: Dimensions.get("window").width * 0.9,
};

const textInputStyle = {
  height: 40,
  borderColor: "gray",
  borderWidth: 2,
  width: "100%",
  marginTop: 4,
  borderColor: "blue",
  borderRadius: 5,
  padding: 10,
};

function Input({ label, ...rest }) {
  return (
    <View style={inputContainer}>
      {label && <Text>{label}</Text>}
      <TextInput {...rest} style={textInputStyle} />
    </View>
  );
}

export default Input;

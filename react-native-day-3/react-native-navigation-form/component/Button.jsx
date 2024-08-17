import { Pressable, Text } from "react-native";
const pressableStyle = {
  padding: 10,
  backgroundColor: "blue",
  margin: 10,
};

const pressableTextStyle = {
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
};

function Button({ children, ...rest }) {
  return (
    <Pressable {...rest} style={pressableStyle}>
      <Text style={pressableTextStyle}>{children}</Text>
    </Pressable>
  );
}

export default Button;

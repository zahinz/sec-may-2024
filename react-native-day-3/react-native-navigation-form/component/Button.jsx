import { Pressable, Text, View } from "react-native";
const defaultStyle = {
  padding: 10,
  backgroundColor: "blue",
  borderRadius: 5,
  borderWidth: 2,
  borderColor: "blue",
};

const outlineVariant = {
  backgroundColor: "transparent",
  borderWidth: 2,
  borderColor: "blue",
};

const defaultTextStyle = {
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
};

const outlineVariantTextStyle = {
  color: "blue",
};

function Button({ variant, children, ...rest }) {
  const pressableStyle =
    variant === "outline"
      ? { ...defaultStyle, ...outlineVariant }
      : defaultStyle;

  const pressableTextStyle =
    variant === "outline"
      ? { ...defaultTextStyle, ...outlineVariantTextStyle }
      : defaultTextStyle;

  return (
    <View>
      {/* additional rest.style will superseed the component style */}
      <Pressable {...rest} style={{ ...pressableStyle, ...rest.style }}>
        <Text style={pressableTextStyle}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

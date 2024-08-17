import { Text, View } from "react-native";

const screenContainerStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

function DashboardScreen() {
  return (
    <View style={screenContainerStyle}>
      <Text>Dashboard Screen</Text>
    </View>
  );
}

export default DashboardScreen;

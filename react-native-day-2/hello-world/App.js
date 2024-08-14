import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import icon from "./assets/favicon.png";
import qrCode from "./assets/qrcode.png";

// View is like a div
// Text is like a span
// SafeAreaView is a View that is safe for notches in iOS devices

// in react native unit measurements are in dp (density-independent pixels) instead of px
// no need to put a unit after the number

// flex behaviour in rect native is default
// flexDirection is column by default

const viewContainerStyle = {
  padding: 16,
  backgroundColor: "black",
};

const textStyle = {
  color: "white",
  fontSize: 24,
};

const view2ContainerStyle = {
  padding: 32,
  backgroundColor: "white",
  borderBottomWidth: 1,
  gap: 16,
};

const pressableStyle = {
  padding: 16,
  backgroundColor: "blue",
  borderRadius: 8,
};

const pressableTextStyle = {
  color: "white",
  fontSize: 24,
  textAlign: "center",
};

const imageStyle = {
  width: 100,
  height: 100,
};

const childrenHorizontalStyle = {
  width: 300,
  backgroundColor: "red",
  padding: 16,
  height: 160,
  justifyContent: "center",
  alignItems: "center",
  borderColor: "white",
  borderWidth: 1,
};

const childrenHorizontalTextStyle = {
  color: "white",
  fontSize: 24,
};

function App() {
  function onPressButton() {
    alert("Button pressed!");
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={viewContainerStyle}>
          <Text style={textStyle}>Hello, world!</Text>
        </View>
        <View style={view2ContainerStyle}>
          <Text>Horizontal Scroll Element</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={childrenHorizontalStyle}>
              <Text style={childrenHorizontalTextStyle}>Item 1</Text>
            </View>
            <View style={childrenHorizontalStyle}>
              <Text style={childrenHorizontalTextStyle}>Item 2</Text>
            </View>
            <View style={childrenHorizontalStyle}>
              <Text style={childrenHorizontalTextStyle}>Item 3</Text>
            </View>
          </ScrollView>
        </View>
        <View style={view2ContainerStyle}>
          <Text>Button using Button</Text>
          <Button
            onPress={onPressButton}
            title="Button which not even looks like a button"
            color="#841584"
          />
        </View>
        <View style={view2ContainerStyle}>
          <Text>Button using Pressable</Text>
          <Pressable onPress={onPressButton} style={pressableStyle}>
            <Text style={pressableTextStyle}>Pressable button</Text>
          </Pressable>
        </View>
        <View style={view2ContainerStyle}>
          <Text>Image</Text>
          <Image style={imageStyle} source={icon} />
          <Image style={imageStyle} source={qrCode} />
        </View>
        <View style={view2ContainerStyle}>
          <Text>Input</Text>
        </View>
        <View style={view2ContainerStyle}>
          <Text>Web</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

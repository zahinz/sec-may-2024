import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import icon from "./assets/favicon.png";
import qrCode from "./assets/qrcode.png";
import { WebView } from "react-native-webview";
import * as WebBrowser from "expo-web-browser";
import { useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

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
  paddingVertical: 32,
  paddingHorizontal: 16,
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
  fontSize: 16,
  textAlign: "center",
  fontWeight: "bold",
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

const TextInputStyle = {
  padding: 16,
  borderRadius: 8,
  borderColor: "black",
  borderWidth: 1,
};

const InputContainerStyle = {
  gap: 8,
};

const webViewStyle = {
  width: 300,
  height: 600,
  borderColor: "black",
  borderWidth: 1,
  borderRadius: 8,
  marginRight: 16,
};

function App() {
  function onPressButton() {
    alert("Button pressed!");
  }

  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://reactnative.dev/");
    setResult(result);
  };
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
          <Input label="Full name" placeholder="Please insert your full name" />
          <Input label="Email" placeholder="Please insert your email" />
          <Input label="Password" placeholder="Please insert your password" />
          <Pressable style={pressableStyle}>
            <Text style={pressableTextStyle}>Submit</Text>
          </Pressable>
        </View>
        <View style={view2ContainerStyle}>
          <Text>Web View</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <WebView
              style={webViewStyle}
              source={{ uri: "https://google.com" }}
            />
            <WebView
              style={webViewStyle}
              source={{ uri: "https://facebook.com" }}
            />
            <WebView
              style={webViewStyle}
              source={{ uri: "https://zahinzul.com" }}
            />
          </ScrollView>
        </View>
        <View style={view2ContainerStyle}>
          <Text>Web Browser</Text>
          <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
          <Text>{result && JSON.stringify(result)}</Text>
        </View>
        <View style={view2ContainerStyle}>
          <Text>Camera</Text>
          <Camera />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Input({ label, ...rest }) {
  return (
    <View style={InputContainerStyle}>
      <Text>{label}</Text>
      <TextInput style={TextInputStyle} {...rest} />
    </View>
  );
}

function Camera() {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    height: 400,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;

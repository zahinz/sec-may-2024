import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useSearchApi from "./api";
import { useState } from "react";

export default function App() {
  const [word, setWord] = useState("");
  const { loading, isError, data, fetch } = useSearchApi(word);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ ...styles.header, marginTop: 40, marginBottom: 20 }}>
        Dictionary App
      </Text>
      <TextInput
        style={styles.input}
        value={word}
        onChangeText={setWord}
        placeholder="Search a new word"
      />
      <Pressable style={styles.button} onPress={fetch}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {loading ? "Searching..." : "Search"}
        </Text>
      </Pressable>
      {isError && <NotFoundAlert />}
      {data && (
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            marginTop: 40,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              padding: 10,
              fontSize: 14,
            }}
          >
            {JSON.stringify(data, null, 4)}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

function NotFoundAlert() {
  return (
    <View
      style={{
        backgroundColor: "red",
        width: "90%",
        marginTop: 40,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          padding: 10,
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Word not found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "orange",
    minHeight: "100%",
  },
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
  },
});

import { StyleSheet, Text } from "react-native";

function Header({ children, ...rest }) {
  return <Text style={{ ...styles.header, ...rest.style }}>{children}</Text>;
}

function Paragraph({ children, ...rest }) {
  return <Text style={{ ...styles.paragraph, ...rest.style }}>{children}</Text>;
}

function Caption({ children, ...rest }) {
  return <Text style={{ ...styles.caption, ...rest.style }}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
});

const Typography = {
  Header,
  Paragraph,
  Caption,
};

export default Typography;

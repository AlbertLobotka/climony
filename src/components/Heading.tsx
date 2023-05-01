import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  text: string;
  level: 1 | 2 | 3 | 4;
  color?: string;
}

const Heading: React.FC<Props> = ({ text, level, color = "black" }) => {
  return (
    <Text
      style={[
        styles.title,
        level === 1 && styles.level1,
        level === 2 && styles.level2,
        level === 3 && styles.level3,
        level === 4 && styles.level4,
        { color },
      ]}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  level1: {
    fontSize: 42,
  },
  level2: {
    fontSize: 36,
  },
  level3: {
    fontSize: 28,
  },
  level4: {
    fontSize: 20,
  },
});

export default Heading;

import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

interface Props {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Heading: React.FC<Props> = ({ text, level, color = "black", style }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={[
          styles.title,
          level === 1 && styles.level1,
          level === 2 && styles.level2,
          level === 3 && styles.level3,
          level === 4 && styles.level4,
          level === 5 && styles.level5,
          level === 6 && styles.level6,
          { color },
          style,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    flexWrap: "wrap",
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
  level5: {
    fontSize: 18,
  },
  level6: {
    fontSize: 16,
  },
});

export default Heading;

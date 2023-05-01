import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  text: string;
  size?: number;
  color?: string;
}

const TextView: React.FC<Props> = ({ text, size = 16, color = "black" }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[styles.title, { color, fontSize: size }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexWrap: "wrap",
  },
});

export default TextView;

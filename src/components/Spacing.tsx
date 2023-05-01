import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  size?: number;
}

const Spacing: React.FC<Props> = ({ size = 10 }) => {
  return <View style={[styles.container, { width: size, height: size }]} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default Spacing;

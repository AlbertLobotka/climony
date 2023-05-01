import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "./Heading";
import { LinearGradient } from "expo-linear-gradient";
import Spacing from "./Spacing";

interface Props {
  image: ImageSourcePropType;
  title: string;
  color: string;
  onPress?: () => void;
  icon: React.ReactNode;
}

const Card: React.FC<Props> = ({ image, title, color, onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <LinearGradient
            colors={["transparent", color]}
            style={styles.gradient}
          ></LinearGradient>
          <View style={styles.row}>
            {icon}
            <Spacing />
            <Heading text={title} level={3} color="white" />
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderRadius: 20,
    height: 200,
    marginRight: 16,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 16,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Card;

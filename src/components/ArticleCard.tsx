import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Heading from "./Heading";
import TextView from "./TextView";
import Feather from "@expo/vector-icons/Feather";
import Spacing from "./Spacing";

interface Props {
  image: ImageSourcePropType;
  title: string;
  description: string;
  duration: number;
  onPress?: () => void;
}

const ArticleCard: React.FC<Props> = ({
  image,
  title,
  description,
  duration,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.body}>
          <Heading text={title} level={6} />
          <TextView text={description} size={12} />
          <View style={styles.icon}>
            <Feather name="clock" size={13} color="#41445B" />
            <Spacing size={5} />
            <TextView text={`${duration} mins`} size={12} color="#41445B" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 140,
    marginBottom: 16,
    flexDirection: "row",
    backgroundColor: "#F9F4EF",
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  image: {
    resizeMode: "cover",
    width: 100,
    borderRadius: 10,
  },
  body: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexWrap: "wrap",
    flex: 1,
  },
  icon: {
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    bottom: 16,
    left: 16,
  },
});

export default ArticleCard;

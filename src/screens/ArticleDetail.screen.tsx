import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import Heading from "../components/Heading";
import Spacing from "../components/Spacing";
import { useEffect } from "react";
import useArticleDetailStore from "../stores/articleDetail.store";
import TextView from "../components/TextView";
import Curve from "../components/Curve";
import Feather from "@expo/vector-icons/Feather";

interface Props {
  topicId: string;
  articleId: string;
}

export default function ArticleDetailScreen({ topicId, articleId }: Props) {
  const detail = useArticleDetailStore((state) => state.data);
  const getData = useArticleDetailStore((state) => state.actions.getData);
  const { title, description, image, readingTime, publishedAt } = detail || {};
  useEffect(() => {
    getData({ topicId, articleId });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.body}>
          <View style={styles.invertBorder}>
            <Curve color="#FFFAF5" />
          </View>
          <View style={styles.bodyInner}>
            <Heading text={title} level={2} color="#12173D" />
            <Spacing size={20} />
            <View style={styles.row}>
              <View style={styles.icon}>
                <Feather name="clock" size={13} color="#41445B" />
                <Spacing size={5} />
                <TextView
                  text={`${readingTime} mins`}
                  size={13}
                  color="#41445B"
                />
              </View>
              <TextView
                text={new Date(publishedAt).toDateString()}
                size={13}
                color="#41445B"
              />
            </View>
            <Spacing size={20} />

            <TextView size={16} text={description} color="#12173D" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  header: {},
  body: {
    backgroundColor: "#FFFAF5",
    flex: 1,
  },
  bodyInner: {
    padding: 24,
    borderTopRightRadius: 50,
    backgroundColor: "#FFFAF5",
    paddingTop: 38,
    position: "relative",
    top: -40,
    bottom: 0,
  },
  image: {
    borderBottomLeftRadius: 50,
    height: 300,
    width: "100%",
    resizeMode: "cover",
  },
  invertBorder: {
    position: "absolute",
    left: 0,
    top: -240,
    width: 100,
    height: 100,
    zIndex: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
  },
});

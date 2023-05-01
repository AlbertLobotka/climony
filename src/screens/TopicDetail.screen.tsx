import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Heading from "../components/Heading";
import Spacing from "../components/Spacing";
import { useEffect } from "react";
import useTopicDetailStore from "../stores/topicDetail.store";
import ArticleCard from "../components/ArticleCard";

export default function TopicDetailScreen({ id }: { id: string }) {
  const detail = useTopicDetailStore((state) => state.data);
  const getData = useTopicDetailStore((state) => state.actions.getData);
  const router = useRouter();
  const { articles = [], title, description, color, category } = detail || {};
  useEffect(() => {
    getData({ id });
  }, []);

  const handleGoToDetail = (articleId: string) =>
    router.push({
      pathname: `/topics/article-detail`,
      params: { topicId: id, articleId, color, name: category },
    });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Spacing size={40} />
        <Heading text={title} level={3} />
        <Text style={styles.subtitle}>{description}</Text>
        <Spacing size={33} />
        <Heading text="Übersicht" level={4} />
        <FlatList
          style={{
            paddingHorizontal: 16,
            marginHorizontal: -16,
            paddingTop: 16,
          }}
          data={articles}
          renderItem={({ item }) => (
            <ArticleCard
              onPress={() => handleGoToDetail(item.id)}
              key={item.id}
              image={{ uri: item.image }}
              title={item.title}
              description={item.shortDescription}
              duration={item.readingTime}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  subtitle: {
    fontSize: 16,
    color: "#12173D",
  },
});

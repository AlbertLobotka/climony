import { Tabs, useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Heading from "../components/Heading";
import Spacing from "../components/Spacing";
import useTopicsStore from "../stores/topic.store";
import Card from "../components/Card";
import { useEffect } from "react";
import { TopicModel } from "../models/Topic.model";
import { getIconByTopicId } from "../utils/topicIcon.util";

export default function ExploreScreen() {
  const topics = useTopicsStore((state) => state.data);
  const getTopics = useTopicsStore((state) => state.actions.getData);
  const router = useRouter();

  const handleGoToDetail = (topic: TopicModel) =>
    router.push("/topics/" + topic.id);

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Heading text="Verstehen" level={1} />
          <Spacing size={35} />
          <Text style={styles.subtitle}>
            Wir helfen dir, den Klimawandel zu verstehen, damit du deinen
            Einfluss bewusst verringern kannst.
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyInner}>
            <Heading text="Deine wichtigsten Themen" level={3} />
            <Spacing size={38} />
            <FlatList
              horizontal
              style={{ marginRight: -24 }}
              data={topics}
              renderItem={({ item }) => (
                <Card
                  onPress={() => handleGoToDetail(item)}
                  key={item.id}
                  image={{ uri: item.image }}
                  title={item.name}
                  color={item.color}
                  icon={getIconByTopicId(item.id)}
                />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f4ee",
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
  header: {
    padding: 24,
    paddingTop: 70,
    paddingBottom: 80,
    borderBottomLeftRadius: 50,
    backgroundColor: "white",
  },
  body: {
    backgroundColor: "white",
  },
  bodyInner: {
    padding: 24,
    borderTopRightRadius: 50,
    backgroundColor: "#f9f4ee",
    paddingTop: 38,
  },
});

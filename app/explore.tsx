import { Tabs } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Heading from "../src/components/Heading";
import Spacing from "../src/components/Spacing";
import Card from "../src/components/Card";

const topics = [
  {
    image: require("../assets/topics/topic1.png"),
    title: "Alltagsmobilität",
    color: "#265D4D",
  },
  {
    image: require("../assets/topics/topic2.png"),
    title: "Lifestyle",
    color: "#FFC84C",
  },
  {
    image: require("../assets/topics/topic3.png"),
    title: "Reisen",
    color: "#73A7C0",
  },
  {
    image: require("../assets/topics/topic4.png"),
    title: "Wohnen",
    color: "#FF712C",
  },
];

export default function Page() {
  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: "Verstehen",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="lightbulb" size={24} color="black" />
          ),
        }}
      />
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
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  color={item.color}
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
    backgroundColor: "#F9F4EF",
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
    backgroundColor: "#F9F4EF",
    paddingTop: 38,
  },
});

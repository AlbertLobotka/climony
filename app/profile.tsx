import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function Page() {
  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: "Dein Profil",
          tabBarIcon: () => <Feather name="smile" size={24} color="black" />,
        }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Detail page</Text>
        <Text style={styles.subtitle}>
          This is the detail page of your app.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

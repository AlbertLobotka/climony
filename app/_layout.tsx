import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen
        name="topics"
        options={{
          title: "Verstehen",
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="lightbulb" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen name="projects" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

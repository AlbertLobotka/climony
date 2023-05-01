import { Stack, Tabs } from "expo-router";
import ExploreScreen from "../../src/screens/Explore.screen";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ExploreScreen />
    </>
  );
}

import { Stack, useRouter, useSearchParams } from "expo-router";
import Heading from "../../src/components/Heading";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";
import Spacing from "../../src/components/Spacing";
import TopicDetailScreen from "../../src/screens/TopicDetail.screen";
import useTopicDetailStore from "../../src/stores/topicDetail.store";
import { getIconByTopicId } from "../../src/utils/topicIcon.util";

export default function TopicDetailPage() {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.id as string;
  const detail = useTopicDetailStore((state) => state.data);

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: detail?.color || "#FF712C",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitle: ({ tintColor }) => (
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                alignItems: "center",
              }}
            >
              {getIconByTopicId(id, 20)}
              <Spacing />
              <Heading
                level={4}
                text={detail?.category || id}
                color={tintColor}
                style={{ flex: 1 }}
              />
            </View>
          ),
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={router.back}>
              <Feather name="chevron-left" size={25} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
      />

      <TopicDetailScreen id={id} />
    </>
  );
}

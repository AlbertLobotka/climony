import { Stack, useRouter, useSearchParams } from "expo-router";
import Heading from "../../src/components/Heading";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";
import Spacing from "../../src/components/Spacing";
import TopicDetailScreen from "../../src/screens/TopicDetail.screen";
import useTopicDetailStore from "../../src/stores/topicDetail.store";
import ArticleDetailScreen from "../../src/screens/ArticleDetail.screen";

export default function ArticleDetailPage() {
  const params = useSearchParams();
  const router = useRouter();
  const articleId = params.articleId as string;
  const topicId = params.topicId as string;
  const name = params.name as string;
  const color = params.color as string;

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: color || "#FF712C",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitle: ({ tintColor }) => (
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
              }}
            >
              <Feather name="home" size={22} color={tintColor} />
              <Spacing />
              <Heading
                style={{ flex: 1 }}
                level={4}
                text={name || topicId}
                color={tintColor}
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

      <ArticleDetailScreen topicId={topicId} articleId={articleId} />
    </>
  );
}

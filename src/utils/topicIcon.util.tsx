import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const iconsById = {
  mobility: (size) => <AntDesign name="car" size={size} color="white" />,
  lifestyle: (size) => <AntDesign name="staro" size={size} color="white" />,
  travel: (size) => <SimpleLineIcons name="plane" size={size} color="white" />,
  living: (size) => <Ionicons name="home-outline" size={size} color="white" />,
};

export const getIconByTopicId = (topicId: string, size = 26): React.ReactNode =>
  iconsById[topicId] && iconsById[topicId](size);

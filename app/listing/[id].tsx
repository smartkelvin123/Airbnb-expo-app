import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: String }>();

  return (
    <View>
      <Text>listing</Text>
    </View>
  );
};

export default Page;

import { View, Text } from "react-native";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href={"/(model)/login"}>
        <Text>Login</Text>
      </Link>

      <Link href={"/(model)/booking"}>
        <Text>Booking</Text>
      </Link>
    </View>
  );
};

export default Page;

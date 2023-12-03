import { View, Text, Button } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import Colors from "@/constants/Colors";

import { Link } from "expo-router";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      {isSignedIn && (
        <Button title="Log Out" onPress={() => signOut()} color={Colors.dark} />
      )}
      {!isSignedIn && (
        <Link href={"/(modals)/login"} asChild>
          <Button title="Log In" color={Colors.dark} />
        </Link>
      )}
    </View>
  );
};

export default Page;

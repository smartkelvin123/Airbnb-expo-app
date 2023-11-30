import { View, Text, Button } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

import { Link } from "expo-router";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      <Button title="log out" onPress={() => signOut()} />
      {isSignedIn && <Button title="Log Out" onPress={() => signOut()} />}
      {!isSignedIn && (
        <Link href={"/(model)/login"}>
          <Text>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default Page;

// import { View, Text } from "react-native";

// const Page = () => {
//   return (
//     <View>
//       <Text>profile</Text>
//     </View>
//   );
// };

// export default Page;

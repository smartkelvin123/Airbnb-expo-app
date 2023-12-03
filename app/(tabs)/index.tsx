import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import React from "react";

import ExploreHeader from "../components/ExploreHeader";
import Listings from "../components/Listings";

const Page = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          header: () => (
            <ExploreHeader
            //  onCategoryChanged={function (category: string): void {
            //   throw new Error("Function not implemented.");
            // } }
            />
          ),
        }}
      />
      <Listings />
    </View>
  );
};

export default Page;

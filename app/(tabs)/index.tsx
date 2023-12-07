import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import React, { useState } from "react";

import ExploreHeader from "../components/ExploreHeader";
import Listings from "../components/Listings";

const Page = () => {
  const [category, setCategory] = useState(" tiny home ");

  const onDataChanged = (category: string) => {
    console.log("onDataChanged", category);
  };

  return (
    <View>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings />
    </View>
  );
};

export default Page;

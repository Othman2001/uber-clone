import { StyleSheet, Text, View } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street , London , Uk",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye  , London , Uk",
  },
];
export default function NavFavorites() {
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

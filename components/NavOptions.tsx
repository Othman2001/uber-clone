import { View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useAppState } from "../store";

const data = [
  {
    id: "123",
    title: "Get  a ride",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const { origin } = useAppState();
  const navigate = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            disabled={!origin}
            onPress={() => navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          >
            <View style={tw`${!origin && "opacity-20"}`}>
              <Image
                style={{
                  width: 130,
                  height: 130,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
              <Text style={tw`text-center mt-2 text-lg font-semibold`}>
                {" "}
                {item.title}{" "}
              </Text>
              <Icon
                style={tw`p-2 bg-black rounded-full  w-10 mt-4 mx-auto `}
                type="antdesign"
                color="white"
                name="arrowright"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

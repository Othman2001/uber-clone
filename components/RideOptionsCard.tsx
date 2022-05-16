import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useActions, useAppState } from "../store";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX ",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL  ",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-lux-789",
    title: "Uber LUX ",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
export default function RideOptionsCard() {
  const navigate = useNavigation();
  const [selected, setSelected] = useState(null);
  const { travelTimeInformation, origin, destination } = useAppState();
  const { setTravelTimeInformation } = useActions();
  const SUPER_CHARGE_RATE = 1.4;
  useEffect(() => {
    if (!origin || !destination) return;
    setTravelTimeInformation();
  }, [travelTimeInformation, origin, destination]);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigate.navigate("NavigationCard");
            }}
            style={tw`flex flex-row justify-start   `}
          >
            <Icon size={16} name="chevron-left" type="font-awesome" />
          </TouchableOpacity>
        </View>

        <Text style={tw`text-center  text-xl z-10`}>
          Select Ride - {travelTimeInformation?.distance?.text}
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={tw`flex-row items-center justify-between px-10 ${
                item.id === selected?.id && "bg-gray-200"
              }`}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                }}
                source={{ uri: item.image }}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold `}>{item.title}</Text>
                {/* @ts-ignore */}
                <Text> {travelTimeInformation?.duration.text}</Text>
              </View>
              <Text style={tw`text-xl`}>
                {new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  (travelTimeInformation?.duration.value *
                    SUPER_CHARGE_RATE *
                    item.multiplier) /
                    100
                )}{" "}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View>
          <TouchableOpacity
            disabled={!selected}
            style={tw`bg-black py-3 m-3 ${!selected && `bg-gray-300`}`}
          >
            <Text style={tw`text-xl text-center text-white `}>
              {" "}
              {selected && `Choose The Car ${selected.title}`} {}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useActions } from "../store";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function NavigationCard() {
  const { setDestination } = useActions();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center text-xl`}>good morning "osman"</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          styles={inputBoxStyles}
          fetchDetails={true}
          query={{
            key: "AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I",
            language: "en",
          }}
          minLength={2}
          onPress={(data, details = null, options = null) => {
            setDestination({
              destination: {
                description: data.description,
                location: {
                  lat: details.geometry.location.lat,
                  lng: details.geometry.location.lng,
                },
              },
            });
          }}
          enablePoweredByContainer={false}
          placeholder="where to ? "
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
        />
      </View>
      <View
        style={tw`flex flex-row bg-white  justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Map", { screen: "RideOptionsCard" });
          }}
          style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="car"
            type="font-awesome"
            color="white"
            size={16}
            tvParallaxProperties={undefined}
          />
          <Text style={tw`text-white text-center`}> Rides </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row  w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
            tvParallaxProperties={undefined}
          />
          <Text style={tw` text-center`}> Eats </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const inputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

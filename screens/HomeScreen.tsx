import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useActions } from "../store";

const HomeScreen = () => {
  const { setOrigin, setDestination } = useActions();
  console.log(setOrigin);
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          fetchDetails={true}
          query={{
            key: "AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I",
            language: "en",
          }}
          minLength={2}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null, options = null) => {
            setOrigin({
              origin: {
                description: data.description,
                location: {
                  lat: details.geometry.location.lat,
                  lng: details.geometry.location.lng,
                },
              },
            });
            setDestination(null);
          }}
          enablePoweredByContainer={false}
          placeholder="where from ? "
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

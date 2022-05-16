import { StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useActions, useAppState } from "../store";
import MapViewDirections from "react-native-maps-directions";

export default function Map() {
  const { origin, destination } = useAppState();
  const { setTravelTimeInformation } = useActions();
  const mapRef = useRef(null);
  const [googleApiKey, setGoogleApiKey] = useState(
    "AIzaSyCh07Xx1h5-SiFb9OrA_d8I5KApcdAAN_I"
  );

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {origin && destination && console.log(origin.description, "origin")}
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={googleApiKey}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          identifier="destination"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({});

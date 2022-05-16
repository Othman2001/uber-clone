import {
  MapViewDirectionsDestination,
  MapViewDirectionsOrigin,
} from "react-native-maps-directions";

interface IState {
  origin: {
    location: { lat: number; lng: number };
    description: string;
  } | null;
  destination: {
    location: { lat: number; lng: number };
    description: string;
  } | null;
  travelTimeInformation: Object | null;
}

export const state: IState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

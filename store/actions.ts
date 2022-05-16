import { Action, AsyncAction } from ".";
import { IOriginType } from "./types";

export const setOrigin: Action<{
  origin: {
    location: { lat: number; lng: number };
    description: string;
  };
}> = ({ state }, origin) => {
  state.origin = origin.origin;
};
export const setDestination: Action<{
  destination: {
    location: { lat: number; lng: number };
    description: string;
  };
}> = ({ state }, destination) => {
  state.destination = destination.destination;
};
export const setTravelTimeInformation: AsyncAction = async ({
  state,
  effects,
}) => {
  if (state.origin && state.destination) {
    state.travelTimeInformation = await effects.getTravelDistanceInformation(
      state.origin,
      state.destination
    );
  }
};

import { createOvermind } from "overmind";
import { IContext } from "overmind";

import { state } from "./state";
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook,
} from "overmind-react";
import * as actions from "./actions";
import * as effects from "./effects";

export type Context = IContext<typeof config>;
export type Action<Input = void, Output = void> = (
  contect: Context,
  input: Input
) => Output;

export type AsyncAction<Input = void, Output = void> = (
  contect: Context,
  input: Input
) => Promise<Output>;
export type Initialize<Input = void> = (contect: Context, input: Input) => void;
export const config = {
  state,
  actions,
  effects,
};

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();

export const overmind = createOvermind(config, {
  devtools: "192.168.1.9:3031", // <---
});

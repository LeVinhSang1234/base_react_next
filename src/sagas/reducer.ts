import { FunctionReducer } from "@/types";
import { combineReducers } from "redux";
import models from ".";

let reducers: { [key: string]: FunctionReducer } = {};

const baseReducer = (state: any, action: any, model: string) => {
  let newState = state;
  if (models[model].reducers) {
    for (const key in models[model].reducers) {
      if (action.type === `${model}/${key}`) {
        if (typeof models[model].reducers[key] !== "function") {
          console.warn(`${key} in reducer must be a function (Model ${model})`);
        } else {
          newState = models[model].reducers[key](state, action);
        }
      }
    }
  } else {
    console.warn(`reducers not existed (Model ${model})`);
  }
  return newState;
};

for (const model in models) {
  if (!models[model]?.state) {
    console.warn(`should be initialization state (Model ${model})`);
  }
  const initState = models[model].state || {};
  reducers[model] = (state = initState, action) => {
    return baseReducer(state, action, model);
  };
}

export default combineReducers(reducers);

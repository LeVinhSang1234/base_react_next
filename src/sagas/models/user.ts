import { ActionRedux, ParamsRedux } from "@/types";

export declare type UserState = {
  [key: string]: any;
};

const user = {
  namespace: "user",
  state: {},

  effects: {
    *fetch({ callback }: ParamsRedux, { put, call }: ActionRedux): any {
      try {
        yield put({ type: "user/save", payload: { test: "user test" } });
        callback?.();
      } catch (e) {
        callback?.({ error: e });
      }
    },
  },
  reducers: {
    save(state: UserState, action: any) {
      return action.payload
    },
  },
};

export default user;

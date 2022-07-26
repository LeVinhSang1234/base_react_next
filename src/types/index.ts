import { ReactNode } from "react";

export declare type PayloadRedux = {
  [key: string]: any;
};

export declare type CallbackFunction = (response?: any) => any;

export declare type ParamsRedux = {
  payload?: PayloadRedux;
  callback?: CallbackFunction;
};

export declare type ActionRedux = {
  call: (v: any) => Promise<any>;
  put: (v: {
    type: string;
    payload?: { [key: string]: any };
    callback?: CallbackFunction;
  }) => any;
};

export declare type RouteMap = {
  route: string;
  Component: React.ComponentType<any>;
};

export declare type LayoutProps = {
  children: ReactNode;
};

export declare type LayoutProviderValue = {
  setLoading: (flag: boolean) => any;
};

export declare type RequireContext = {
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  /** The module id of the context module. This may be useful for module.hot.accept. */
  id: string;
};

export declare type FunctionEffect = (a: ParamsRedux, b: ActionRedux) => any;

export declare type FunctionReducer = (a: any, b: any) => any;

export declare type ModelsInterface = {
  namespace: string;
  state: any;
  effects: {
    [key: string]: FunctionEffect;
  };
  reducers: {
    [key: string]: FunctionReducer;
  };
};

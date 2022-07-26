import { LayoutProviderValue } from "@/types";
import { createContext, useContext } from "react";

const initProvider: LayoutProviderValue = {
  setLoading: () => null,
};

export const LayoutProvider = createContext(initProvider);

export const useLayout = () => useContext(LayoutProvider);

import { useContext } from "react";
import { ColorContext } from "../colorArrangementContext";

export const useColorContext = () => {
  if (!ColorContext) {
    throw new Error("Color context is undefined.");
  }
  return useContext(ColorContext);
};

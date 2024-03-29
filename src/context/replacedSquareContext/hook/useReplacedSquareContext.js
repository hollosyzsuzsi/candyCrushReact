import { useContext } from "react";
import { ReplacedSquareContext } from "../replacedSquareContext";

export const useReplacedSquareContext = () => {
  if (!ReplacedSquareContext) {
    throw new Error("Replaced square context is undefined");
  }
  return useContext(ReplacedSquareContext);
};

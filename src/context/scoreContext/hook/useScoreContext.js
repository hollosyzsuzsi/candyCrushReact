import { useContext } from "react";
import { ScoreContext } from "../scoreContext";

export const useScoreContext = () => {
  if (!ScoreContext) {
    throw new Error("Score context is undefined");
  }
  return useContext(ScoreContext);
};

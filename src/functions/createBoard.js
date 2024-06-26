import { width } from "../constants";

export const createBoard = (candyColors, setCurrentColorArrangement) => {
  const randomColorArrangement = [];
  for (let i = 0; i < width * width; i++) {
    const randomColor =
      candyColors[Math.floor(Math.random() * candyColors.length)];
    randomColorArrangement.push(randomColor);
  }
  setCurrentColorArrangement(randomColorArrangement);
};

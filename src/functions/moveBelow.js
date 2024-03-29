import { width, blank } from "../constants";

export const moveIntoSquareBelow = (currentColorArrangement, candyColors) => {
  for (let i = 0; i <= 55; i++) {
    const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
    const isFirstRow = firstRow.includes(i);
    if (isFirstRow && currentColorArrangement[i] === blank) {
      let randomNumber = Math.floor(Math.random() * candyColors.length);
      currentColorArrangement[i] = candyColors[randomNumber];
    }
    if (currentColorArrangement[i + width] === blank) {
      currentColorArrangement[i + width] = currentColorArrangement[i];
      currentColorArrangement[i] = blank;
    }
  }
};

import { width, blank } from "../constants";

export const checkForColumnOfFour = (
  currentColorArrangement,
  setScoreDisplay
) => {
  for (let i = 0; i <= 39; i++) {
    const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
    const decidedColor = currentColorArrangement[i];
    const isBlank = currentColorArrangement[i] === blank;

    if (
      columnOfFour.every(
        (square) => currentColorArrangement[square] === decidedColor && !isBlank
      )
    ) {
      setScoreDisplay((score) => score + 4);
      columnOfFour.forEach(
        (square) => (currentColorArrangement[square] = blank)
      );
      return true;
    }
  }
};

export const checkForRowOfFour = (currentColorArrangement, setScoreDisplay) => {
  for (let i = 0; i < 64; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor = currentColorArrangement[i];
    const notValid = [
      5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
      54, 55, 62, 63, 64,
    ];
    const isBlank = currentColorArrangement[i] === blank;

    if (notValid.includes(i)) continue;

    if (
      rowOfFour.every(
        (square) => currentColorArrangement[square] === decidedColor && !isBlank
      )
    ) {
      setScoreDisplay((score) => score + 4);
      rowOfFour.forEach((square) => (currentColorArrangement[square] = blank));
      return true;
    }
  }
};

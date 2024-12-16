export const formatScoreBy = (scoreBy: number) => {
  return scoreBy.toLocaleString();
};

export const formatNumberRating = (number : number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).toLocaleString() + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1).toLocaleString() + "K";
  } else {
    return number.toLocaleString();
  }
};

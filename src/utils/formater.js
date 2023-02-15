export const populationFormater = (populationNum) => {
  return new Intl.NumberFormat("de-DE").format(populationNum);
};

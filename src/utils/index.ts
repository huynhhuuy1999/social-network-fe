export const createArrCustom = (numFrom: number, numTo: number): number[] => {
  let arr: number[] = [];
  for (let i = numFrom; i <= numTo; i++) {
    arr.push(i);
  }
  return arr;
};

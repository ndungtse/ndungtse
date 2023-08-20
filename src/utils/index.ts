// use recursion to shuffle the array
export const shuffle: (any: any[]) => any[] = (array: any[]) => {
  const length = array.length;
  if (length <= 1) return array;
  const randomIndex = Math.floor(Math.random() * length);
  const [item] = array.splice(randomIndex, 1);
  return [item, ...shuffle(array)];
};

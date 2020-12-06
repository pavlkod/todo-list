export const formatArray = (mainArray = [], findArray = []) => {
  return mainArray.map(item => {
    if (findArray.length) {
      item.hex = findArray.find(i => i.id === item.colorId)?.hex;
    }
    return item;
  });
};
export const getHexByColorID = (colorID, findArray = []) => {
  return findArray.find(i => i.id === colorID)?.hex;
};

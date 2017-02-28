export const getReadableColor = (color) => {
  let r = parseInt(color[1] + color[2], 16);
  let g = parseInt(color[3] + color[4], 16);
  let b = parseInt(color[5] + color[6], 16);
  let sum = r + g + b;
  return (sum > 382) ? '#000' : '#FFF';
};

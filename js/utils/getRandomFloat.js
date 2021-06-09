function getRandomFloat(min, max, float = '2') {
  if (min < 0 || max < 0) {
    throw new Error('Уупс!');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
}

export{getRandomFloat};

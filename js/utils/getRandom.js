const  getRandomFloat = (min, max, float = '2') => {
  if (min < 0 || max < 0) {
    throw new Error('Некорректные данные. Введите значение больше 0');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
};

const getRandomArrayElement = (elements) => elements[getRandomFloat(0, elements.length - 1, 0)];

const getRandomElement = () => getRandomFloat(0, 100000, 0);

export{getRandomFloat};
export{getRandomArrayElement};
export{getRandomElement};

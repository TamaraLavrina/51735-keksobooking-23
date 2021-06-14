function getRandomFloat(min, max, float = '2') {
  if (min < 0 || max < 0) {
    throw new Error('Некорректные данные. Введите значение больше 0');
  }
  return Number((Math.random() * (max - min) + min).toFixed(float));
}

const createLocation = () => {
  const location = {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5),
  };

  return  location;
};

const getRandomArrayElement = (elements) => elements[getRandomFloat(0, elements.length - 1, 0)];

const getRandomElement = () => getRandomFloat(0, 100000, 0);

const createAvatar = () => {
  const advAvatar = getRandomFloat(1, 10, 0);
  const advAvatarString = String(advAvatar);
  return {
    avatar: `img/avatars/user${advAvatarString.padStart( 2 , '0')}.png`,
  };
};


export{createLocation};
export{getRandomFloat};
export{getRandomElement};
export{getRandomArrayElement};
export{createAvatar};

// Результат: целое число из диапазона "от...до"
function getRandomInRange(min, max) {
  if (min < 0 || max < 0) {
    throw new Error('Уупс!');
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}
getRandomInRange(5, 95);

function getRandomFloat(min, max, float = '2') {
  if (min < 0 || max < 0) {
    throw new Error('Уупс!');
  }
  return (Math.random() * (max - min) + min).toFixed(float);
}
getRandomFloat(5,555,3);

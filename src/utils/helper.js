export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

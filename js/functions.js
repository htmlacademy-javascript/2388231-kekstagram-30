// Функция проверки длины строки
const checksOfString = (string, stringLength) => {
  return string.length <= stringLength;
};

// Функция проверки палиндрон

const checksOfPalindrom = (textstring) => {
  const normal = textstring.replaceAll(' ', '').toLowerCase();
  let reverse = '';
  for (let i = normal.length - 1; i >= 0; i--) {
    reverse += normal.at(i);
  }
  return normal === reverse;
};

// Функция извлечения чисел

const getNumbers = (num) => {
  let numString = num.toString();
  let resulte = '';
  for (let i = 0; i <= numString.length; i++) {
    if (!Number.isNaN(parseInt(numString.at(i), 10))) {
      resulte += numString.at(i);
    }
  }
  return parseInt(resulte, 10);

};


console.log(getNumbers('2023 год'));// 2023
console.log(getNumbers('ECMAScript 2022'));// 2022
console.log(getNumbers('1 кефир, 0.5 батона')); // 105
console.log(getNumbers('агент 007'));// 7
console.log(getNumbers('а я томат'));// NaN

console.log(getNumbers(2023)); // 2023
console.log(getNumbers(-1));// 1
console.log(getNumbers(1.5)); // 15

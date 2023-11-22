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

//Функция подсчета рабочего времени

const definesWorkingTime = (start, finish, meeting, duration) => {

  const arrayTime = [start, finish, meeting];
  const timeWorkMinutes = [];
  for (let i = 0; i < arrayTime.length; i++) {
    const stringTime = arrayTime[i].split(':');
    const getTime = parseInt(stringTime[0] * 60, 10) + parseInt(stringTime[1], 10);
    timeWorkMinutes.push(getTime);
  }
  if (timeWorkMinutes[0] <= timeWorkMinutes[2] && timeWorkMinutes[2] + duration <= timeWorkMinutes[1]) {
    return true;
  }
  return false;
};

console.log(definesWorkingTime('08:00', '17:30', '14:00', 90)); // true
console.log(definesWorkingTime('8:0', '10:0', '8:0', 120)); // true
console.log(definesWorkingTime('08:00', '14:30', '14:00', 90)); // false
console.log(definesWorkingTime('14:00', '17:30', '08:0', 90)); // false
console.log(definesWorkingTime('8:00', '17:30', '08:00', 900)); // false



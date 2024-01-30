'use strict';

const rain = Math.random();
const mathematicsPoint = +prompt('Введите кол-во баллов по математике:');
const russianLanguagePoint = +prompt('Введите кол-во баллов по русскому языку:');
const InformaticsPoint = +prompt('Введите кол-во баллов по информатике:');
const minSumm = +prompt('Выберите сумму для снятия:');

if (Math.round(rain) === 0) {
  console.log('Дождя нет!')
} else { console.log('Пошёл дождь. Возьмите зонт!') };

if (mathematicsPoint + russianLanguagePoint + InformaticsPoint >= 265) {
  console.log('Поздравляю, вы поступили на бюджет!')
} else {
  console.log('К сожалению, вы не поступили на бюджет!')
};

if (minSumm >= 100) {
  console.log('Распечатать чек?')
} else {
  console.log('Минимальная сумма для снятия 100р')
};
'use strict';
{
  const rain = Math.random();

  if (Math.round(rain) === 0) {
    console.log('Дождя нет!')
  } else { console.log('Пошёл дождь. Возьмите зонт!') };
};

{
  const mathematicsPoint = +prompt('Введите кол-во баллов по математике:');
  const russianLanguagePoint = +prompt('Введите кол-во баллов по русскому языку:');
  const informaticsPoint = +prompt('Введите кол-во баллов по информатике:');

  if (mathematicsPoint + russianLanguagePoint + informaticsPoint >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!')
  } else {
    console.log('К сожалению, вы не поступили на бюджет!')
  };
};

{
  const summ = +prompt('Выберите сумму для снятия:');

  if (summ % 100) {
    console.log('Сумма для снятия должна быть кратна 100р')
  } else {
    console.log('Распечатать чек?')
  };
};

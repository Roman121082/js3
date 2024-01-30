'use strict';

const nameProduct = prompt('Наименование товара');
const quantityProduct = prompt('Количество товара');
const categoryProduct = prompt('Категория товара');
const priceProduct = prompt('Цена товара');

if (isNaN(quantityProduct)) {
  console.log('Количество товара - Вы ввели некорректные данные')
};
if (isNaN(priceProduct)) {
  console.log('Цена товара - Вы ввели некорректные данные')
};

console.log(nameProduct);
console.log(quantityProduct);
console.log(categoryProduct);
console.log(priceProduct);
console.log('На складе имееется', quantityProduct, ' ', nameProduct, ' на сумму ', quantityProduct * priceProduct, 'рублей');






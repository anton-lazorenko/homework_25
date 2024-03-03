"use strict"
const USD = "USD"
const EUR = "EUR"
let requestRate = +prompt(`введите актуальный курс`)
if (!isNaN(requestRate) && requestRate > 0) {
     function createCurrencyConverter(requestRate) {
        let currencyRate = requestRate

        function intoEUR(valueUSD) {
            let resultEUR = valueUSD * currencyRate
            return resultEUR.toLocaleString( 'es-ES', {style: 'currency' , currency: 'EUR'})
        }

        function intoUSD(valueEUR) {
            let resultUSD = valueEUR / currencyRate
            return resultUSD.toLocaleString( 'en-US', {style: 'currency' , currency: 'USD'})
        }

        return {
            intoEUR: intoEUR,
            intoUSD: intoUSD,
        }
    }

    let requestConvert = prompt(`Введите сумму для конвертации и валюту. Например: 100 EUR`)
    const CONVERTER =  createCurrencyConverter(requestRate)
    const USER_VALUE = parseInt(requestConvert)
    const USER_RESULT = requestConvert.includes(USD) ? CONVERTER.intoEUR(USER_VALUE) : CONVERTER.intoUSD(USER_VALUE)

    alert(`${USER_RESULT}`);


} else {
    alert(`Вы ввели неверное значение`)
} 


// ----------------- TASK2 -----------------------------------------------
 
function createInvestmentAccount(initialAmount, annualInterestRate) {
  let profit;
  function deposit(amount) { // добавляем средства 
    initialAmount += amount;
    return initialAmount;
  }

  function withdraw(amount) { // снимаем средства
    initialAmount -= amount;
    return initialAmount;
  }

  function calculateProfit(years) {
    profit = initialAmount * Math.pow(1 + annualInterestRate / 100, years) - initialAmount; // рассчитываем прибыль за количестве лет
    return profit.toFixed(2);
  }

  function getAccountInfo() {
    return console.log(`Текущий баланс: ${initialAmount} \n Ставка: ${annualInterestRate}% \n Прибыль: ${profit.toFixed(2)}`); // Возвращаем инфу о текущем баллансе, ставке и общей прибыли
  }

  return {
    deposit, withdraw, calculateProfit, getAccountInfo
  }
}

const myAccount = createInvestmentAccount(5000, 10);
myAccount.deposit(1000);
myAccount.withdraw(100);
console.log(myAccount.calculateProfit(5));
console.log(myAccount.getAccountInfo());

 
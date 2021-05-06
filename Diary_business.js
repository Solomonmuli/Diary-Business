var productionShedA = 510
var productionShedB = 308
var productionShedC = 486
var productionShedD = 572

let total_Production = productionShedA + productionShedB + productionShedC + productionShedD


function totalProduction(){
  console.log("Your production in Shed A "+ productionShedA + " litres per day")
  console.log("Your production in Shed B "+ productionShedB + " litres per day")
  console.log("Your production in Shed C "+ productionShedC + " litres per day")
  console.log("Your production in Shed D "+ productionShedD + " litres per day")
  console.log("The total production is " + total_Production + " litres per day")
}

totalProduction()

let months = {
  January: 31,
  February: 29,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

var week = 7
var year = 12

incomeOverTime(45, 7);

function incomeOverTime(selling_price, time) {
  console.log("Your weekly income will be Ksh " + weeklyAmount)
  console.log("Your yearly income will be Ksh " + yearlyAmount)
  Object.entries(months).forEach(([key, value]) => {
  console.log(`Your income for ${key} is ${value}`)
});
let weeklyAmount = week * total_Production * selling_price
let yearlyAmount = year * total_Production * selling_price

}
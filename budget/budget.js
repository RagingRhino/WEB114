// Dylan Gregory 10/15/2025

let money = 1000;
let housing = 100;
let food = 500;
let utilities = 225;

let totalIncome = money;

let totalExpenses = housing + food + utilities;

let ramainingMoney = totalIncome - totalExpenses;

console.log( "The total income was: " +   totalIncome.toLocaleString("en-US", {style: "currency", currency: "USD" }));
console.log( "The rent amount was: " +  housing.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log( "The grocery total was: " +  food.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log( `The percent spent on rent is: ${(housing / money) * 100 }%`);
console.log( `The percent spent on groceries is: ${(food / money) * 100}%`);
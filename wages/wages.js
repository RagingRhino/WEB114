//Dylan Gregory 10/15/2025

let wage = prompt("What is your hourly wage?: ");
wage = parseFloat(wage);
let wageConfirm = confirm(`Is \$${wage} correct?`);

let hours = prompt("How many hours did you work this week?: ");
hours = parseFloat(hours);
let hoursConfirm = confirm(`You worked \$${hours} this week?`);

let grossIncome = hours * wage;

let netIncome = grossIncome - (grossIncome *.2)
console.log(`Your net income each week is: \$${netIncome.toFixed(2)}`)
const amountOfDays = require("date-fns/addDays");
function numberOfDaysToAdd(days) {
  const result = amountOfDays(new Date(2020, 8, 22), days);

  return result;
}

console.log(numberOfDaysToAdd(5));

module.exports = numberOfDaysToAdd;

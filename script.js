let money = prompt("Your budget on month: ");
let time = prompt("Enter the date in the format YYYY-MM-DD: ");

const appData = {
    budget: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: false,
}

let answer1 = prompt("Enter a required expense item for this month : "),
    answer2 = prompt("How much it will cost? "),
    answer3 = prompt("Enter a required expense item for this month : "),
    answer4 = prompt("How much it will cost? ");

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert(appData.budget / 30);
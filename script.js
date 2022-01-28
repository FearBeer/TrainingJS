let money = +prompt("Your budget on month: ");
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

for (let i = 0; i < 2; i++) {
    let answer1 = prompt("Enter a required expense item for this month : "),
        answer2 = prompt("How much it will cost? ");
    if (typeof (answer1) !== null && typeof (answer2) !== null && answer1 !== '' && answer2 !== '' && answer1.length < 50 && answer2.length < 50) {
        appData.expenses[answer1] = answer2;
    } else {
        console.log ("bad result");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30
alert("Everyday budget: ", appData.moneyPerDay);

if (appData.moneyPerDay < 500) {
    console.log("Need more gold!!!");
} else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 1500) {
    console.log("Need some gold...");
} else if (appData.moneyPerDay >= 1500) {
    console.log("Could you borrow me some coins?");
} else {
    console.log("Something is wrong...");
}
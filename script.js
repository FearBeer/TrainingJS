let money, time;

function start() {
    money = prompt("Your budget on month: ");    
    
    while (isNaN(money) || money === '' || money === null) {
        money = prompt("Your budget on month: ");
    }
    time = prompt("Enter the date in the format YYYY-MM-DD: ");
}

start();

const appData = {
    budget: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [

    ],
    savings: true,
    
    chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let answer1 = prompt("Enter a required expense item for this month: "),
                answer2 = prompt("How much it will cost? ");
            if (answer1 !== null && answer2 !== null && answer1 !== '' && answer2 !== '') {
                appData.expenses[answer1] = answer2;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    
    detectDayBudget() {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
        alert("Everyday budget: "+ appData.moneyPerDay);
        // Если добавить ещё и доход от вклада
        // if (appData.savings) {
        //     appData.dayBudget = appData.monthIncome + appData.moneyPerDay;
        //     console.log(appData.dayBudget);
        // } else {
        //     appData.dayBudget = appData.moneyPerDay;
        // }
        // alert("Your day budget is: " + appData.dayBudget);
    },

    checkSavings() {
        if (appData.savings) {
            let save = +prompt("What is the amount of savings?");
            let percent = +prompt("At what percentage?");
            
            appData.monthIncome = +save / 100 / 12 * percent;
            alert("Month income from your deposite: "+ appData.monthIncome); 
        }
    },

    detectLevel() {
        if (appData.moneyPerDay < 500) {
            console.log("Need more gold!!!");
        } else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 1500) {
            console.log("Need some gold...");
        } else if (appData.moneyPerDay >= 1500) {
            console.log("Could you borrow me some coins?");
        } else {
            console.log("Something is wrong...");
        }
    },

    chooseOptionalExpenses() {
        for (let i = 1; i < 4; i++) {
            let question = prompt("Enter optional expences for this month: ");
            appData.optionalExpenses[i] = question;
        }
    },

    chooseIncome() {
        let items = prompt("Which will bring additional income? (pass through comma): ");
        if (items !== null && items !== "") {
            appData.income = items.split(', ');
            appData.income.push(prompt("Something else?... "));
            appData.income.sort();
            appData.income.forEach(element => alert("Additional income: " + element));
        } else {
            alert("Additional income: NONE!  Or error in the data :)");
        }
    }
    
};
console.log("We have : ");
for (let key in appData ) {
    console.log(appData[key]);
}

console.log(appData);
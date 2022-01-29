let startButton = document.getElementById('start');

let budgetValue = document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.querySelectorAll('.expenses-item');
let expenseItemButton = document.getElementsByTagName('button')[0];
let optionalExpensesButton = document.getElementsByTagName('button')[1];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let countBudgetButton = document.getElementsByTagName('button')[2];

let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;

expenseItemButton.disabled = true;
optionalExpensesButton.disabled = true;
countBudgetButton.disabled = true;

startButton.addEventListener('click', () => {
    time = prompt("Enter the date in the format YYYY-MM-DD: ");
    money = +prompt("Your budget on the month: ");    
    
    while (isNaN(money) || money === '' || money === null) {
        money = prompt("Your budget on the month: ");
    }

    appData.budget = money;
    appData.time = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expenseItemButton.disabled = false;
    optionalExpensesButton.disabled = false;
    countBudgetButton.disabled = false;
});

expenseItemButton.addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let answer1 = expensesItem[i].value;
        let answer2 = expensesItem[++i].value;
                if (answer1 !== null && answer2 !== null && answer1 !== '' && answer2 !== '') {
            appData.expenses[answer1] = answer2;
            sum += +answer2;           
        } else {
            console.log("bad result");
            i--;
        }
    }
    expensesValue.textContent = +sum;
});

optionalExpensesButton.addEventListener('click', ()=> {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let question = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = question;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', '; 
    }
});

countBudgetButton.addEventListener('click', () => {
    
    if(appData.budget !== undefined) {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2);
        daybudgetValue.textContent = +appData.moneyPerDay;
    
        if (appData.moneyPerDay < 500) {
            levelValue.textContent = "Need more gold!!!";
        } else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 1500) {
            levelValue.textContent =  "Need some gold...";
        } else if (appData.moneyPerDay >= 1500) {
            levelValue.textContent = "Could you borrow me some coins?";
        } else {
            levelValue.textContent = "Something is wrong...";
        }
    } else {
        levelValue.textContent = "Something is wrong...";
    }
});

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
   
});

checkSavings.addEventListener('click', () => {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appData.savings === true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = +sum / 100 / 12 * percent;
        appData.yearIncome = +sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings === true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = +sum / 100 / 12 * percent;
        appData.yearIncome = +sum / 100 * percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


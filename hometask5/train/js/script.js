let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');
let title = document.querySelector('.title');
let menuItemLi = document.createElement('li');
let adv = document.querySelector('.adv');
let promptForApple = document.getElementById('prompt');

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);


menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let yourViewOnApple = prompt("Say what do you think about Apple productions: ", "");
promptForApple.textContent = yourViewOnApple;

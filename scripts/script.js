'use strict';

const menu = document.querySelector('.menu');
const menuWindow = document.querySelector('.menu-window');
const menuList = document.querySelectorAll('.menu-list .list-item');
menu.addEventListener('click', () => {
  menuWindow.classList.toggle('window-hidden');
});
menuList.forEach((list) => {
  list.addEventListener('click', () => {
    menuWindow.classList.remove('window-hidden');
  });
});
console.log(menuList);

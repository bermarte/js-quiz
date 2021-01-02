'use strict';

import './listeners/next.js';
import { dataFunction } from './logic/dataQuestions.js';
import { checkitem } from './logic/checkItem.js';


localStorage.clear();

var menuItem = document.getElementsByClassName('carousel-inner')[0];
dataFunction();

console.log(menuItem.firstElementChild);
menuItem.firstElementChild.classList.add('active');

let totalItems = $('.carousel-item').length;
let currentIndex = $('div.active').index() + 1;
$('.num').html('' + currentIndex + '/' + totalItems + '');

$('#carouselExampleControls').on('slid.bs.carousel', function () {
    currentIndex = $('div.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
});

checkitem();
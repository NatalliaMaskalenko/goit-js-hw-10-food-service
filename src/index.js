import cardExampleTpl from './temtlates/cards.hbs';
import cards from './menu.json';
console.log(cardExampleTpl(cards[0]));


//настройка темы

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const radioBtnEl = document.querySelector('.theme-switch__track');
const bodyEl = document.querySelector('body');
const checkBoxEl = document.querySelector('#theme-switch-toggle');

radioBtnEl.addEventListener('click', onRadioBtnToggle);

themeColor();

function onRadioBtnToggle(evt) {

    if (bodyEl.classList.contains(Theme.DARK)) {
        bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
        
    } else if
        (bodyEl.classList.contains(Theme.LIGHT)) {
        bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
        
    } else {
        bodyEl.classList.add(Theme.DARK);
        
    };

    localStorage.setItem('thema', bodyEl.getAttribute('class'));
    
};

function themeColor() {
        
    bodyEl.classList.add(localStorage.getItem('thema'))
    if (localStorage.getItem('thema') === Theme.DARK) {
        checkBoxEl.checked = true;
    }
    
};

//Добавляет карточки
const cardsContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMarkup(cards);

function createCardsMarkup(cards) {
    return cards.map(card => cardExampleTpl(card)).join('');
 };

cardsContainer.insertAdjacentHTML('afterbegin', cardsMarkup);

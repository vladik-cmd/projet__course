import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimeID = setTimeout(() => openModal('.modal', modalTimeID), 30000);

  tabs();
  timer();
  modal('[data-modal]', '.modal', modalTimeID);
  cards();
  forms('form', modalTimeID);
  slider();
  calc();
});

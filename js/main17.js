'use strict';

const primaryBtn = document.querySelector('.btn-primary');
const secondaryBtn = document.querySelector('.btn-secondary');
const successBtn = document.querySelector('.btn-success');
const dangerBtn = document.querySelector('.btn-danger');
const infoBtn = document.querySelector('.btn-info');
const darkBtn = document.querySelector('.btn-dark');
const lightBtn = document.querySelector('.btn-light');
const alertBox = document.querySelector('#alert');

function onPrimaryClick() {
  alertBox.classList.add('alert-primary');
  alertBox.textContent = 'A simple primary alert—check it out!';
}

function onSecondaryClick() {
  alertBox.classList.add('alert-primary');
  alertBox.textContent = 'A simple secondary alert—check it out!';
}

function onSuccessMouseover() {
  alertBox.classList.add('alert-success');
  alertBox.textContent = 'A simple success alert—check it out!';
}

function onSuccessMouseout() {
  alertBox.classList.remove('alert-success');
  alertBox.textContent = '';
}

function onDangerFocus() {
  alertBox.classList.add('alert-danger');
  alertBox.textContent = 'A simple danger alert—check it out!';
}

function onDangerFocusout() {
  alertBox.classList.remove('alert-danger');
  alertBox.textContent = '';
}

function onInfoKeypress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    alertBox.classList.add('alert-info');
    alertBox.textContent = 'A simple info alert—check it out!';
  }
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    lightBtn.classList.remove('hide');
    darkBtn.classList.add('hide');
  } else {
    darkBtn.classList.remove('hide');
    lightBtn.classList.add('hide');
  }
}

lightBtn.classList.add('hide');

primaryBtn.onclick = onPrimaryClick;
secondaryBtn.addEventListener('click', onSecondaryClick);
successBtn.addEventListener('mouseover', onSuccessMouseover);
successBtn.addEventListener('mouseout', onSuccessMouseout);
dangerBtn.addEventListener('focus', onDangerFocus);
dangerBtn.addEventListener('focusout', onDangerFocusout);
infoBtn.addEventListener('keypress', onInfoKeypress);
darkBtn.addEventListener('click', toggleMode);
lightBtn.addEventListener('click', toggleMode);

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  const title = cards[i].querySelector('.card-title');
  console.log(title.textContent);
}


function logCardTitle(event) {
  event.preventDefault();
  const card = event.currentTarget.closest('.card');
  const title = card.querySelector('.card-title');
  console.log(title.textContent);
}

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
  const addBtn = cards[i].querySelector('.add-to-cart');
  addBtn.addEventListener('click', logCardTitle);
}
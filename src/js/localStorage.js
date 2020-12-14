import refs from './refs';

function checkStorageData() {
  if (localStorage.getItem('country-markup') !== null) {
    const currentCountry = localStorage.getItem('country-markup');
    refs.content.innerHTML = currentCountry;
  }
}

function saveMarkupInStorage() {
  localStorage.setItem('country-markup', refs.content.innerHTML);
}

export {saveMarkupInStorage, checkStorageData}
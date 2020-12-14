import refs from './refs';
import countriesTemplate from '../templates/countriesTemplate.hbs';
import oneCountryTemplate from '../templates/oneCountryTemplate.hbs';
import {saveMarkupInStorage} from './localStorage';

function countriesMarkup(data) {
  refs.content.insertAdjacentHTML('beforeend', countriesTemplate(data));
  refs.content.addEventListener('click', onItemClick);

  function onItemClick(event) {
    const {target: { nodeName, innerText }} = event; //event.target destructuring 

    if (nodeName !== 'LI') return;
    const selectedCountry = data.find(country => country.name === innerText);
    refs.content.innerHTML = oneCountryTemplate(selectedCountry);
    saveMarkupInStorage();
  }
}

function OneCountryMarkup(data) {
  refs.content.insertAdjacentHTML('beforeend', oneCountryTemplate(...data));
  saveMarkupInStorage()
}




export { countriesMarkup, OneCountryMarkup };
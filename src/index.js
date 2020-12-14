import './styles.css';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { queryError, searchingError } from './js/notification';
import { countriesMarkup, OneCountryMarkup } from './js/createMarkup';
import {checkStorageData} from './js/localStorage'


checkStorageData()

function getInputData(event) {
  refs.content.innerHTML = '';
  const countryName = event.target.value;
  if (countryName.length > 0) {
    fetchCountries(countryName)
      .then(response => response.json())
      .then(data => inputVerefication(data));
  }
}

function inputVerefication(data) {
  if (data.length > 10) queryError();
  else if (data.length > 1 && data.length < 10) countriesMarkup(data);
  else if (data.length === 1) OneCountryMarkup(data);
  else if (data.status === 404) {
    searchingError();
    localStorage.clear();
  }
}

refs.input.addEventListener('input', debounce(getInputData, 500));

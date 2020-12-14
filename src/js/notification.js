import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

function queryError() {
  return error({
    text: 'Too many matches found. Please enter a more specific query!',
    sticker: false,
    mode: 'light',
    maxTextHeight: null,
  });
}

function searchingError() {
  return error({
    text: 'Requested country does not exist. Please, try again!',
    sticker: false,
    mode: 'light',
    maxTextHeight: null,
  });
}

export { queryError, searchingError };

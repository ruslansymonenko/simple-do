import { checkScrollbarVisible } from "./checkScrollbarVisible.js";

export function renderNewList () {
  const listCatalog = document.querySelector('.main-category__list');
  const listCatalogElements = document.querySelectorAll('.main-category__list-item');
  const inputNamelist = document.querySelector('.modal-list__name-input');

  let newList = document.createElement('li');
  newList.classList.add('main-category__list-item');

  let newListName = document.createElement('span');
  newListName.classList.add('main-category__name');
  newListName.textContent = inputNamelist.value;
  
  newList.append(newListName);
  listCatalog.append(newList);
  checkScrollbarVisible(listCatalog, listCatalogElements);
}
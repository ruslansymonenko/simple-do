import { checkScrollbarVisible } from "./checkScrollbarVisible.js";

export function addNewList (listName) {
  const listCatalog = document.querySelector('.main-category__list');
  const listCatalogElements = document.querySelectorAll('.main-category__list-item');

  let newList = document.createElement('li');
  newList.classList.add('main-category__list-item');

  let newListName = document.createElement('span');
  newListName.classList.add('main-category__name');
  newListName.textContent = listName;

  newList.append(newListName);
  listCatalog.append(newList);

  checkScrollbarVisible(listCatalog, listCatalogElements);
}
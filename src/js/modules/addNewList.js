import { checkScrollbarVisible } from "./checkScrollbarVisible.js";

export function addNewList () {
  const listCatalog = document.querySelector('.main-category__list');
  const listCatalogElements = document.querySelectorAll('.main-category__list-item');
  const modalList = document.querySelector('.modal__list-name');
  const confirmNameBtn = document.querySelector('.modal-list__btn-confirm');
  const cancelNameBtn = document.querySelector('.modal-list__btn-cancel');
  const inputNamelist = document.querySelector('.modal-list__name-input');

  modalList.classList.add('modal__list-name--active');

  function renderList () {
    console.log('yes');
    let newList = document.createElement('li');
    newList.classList.add('main-category__list-item');
  
    let newListName = document.createElement('span');
    newListName.classList.add('main-category__name');
    newListName.textContent = inputNamelist.value;
    
    console.log(newListName);
    newList.append(newListName);
    listCatalog.append(newList);
  }

  function handleBtns () {
    confirmNameBtn.addEventListener('click', () => {
      if(inputNamelist.value) {
        renderList();
      }
  
      inputNamelist.value = '';
      modalList.classList.remove('modal__list-name--active');
    })
  
    cancelNameBtn.addEventListener('click', () => {
      inputNamelist.value = '';
      modalList.classList.remove('modal__list-name--active');
    })
  }

  handleBtns();


  checkScrollbarVisible(listCatalog, listCatalogElements);
}
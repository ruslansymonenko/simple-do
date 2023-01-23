import { List } from './classes/List.js';
import { Task } from './classes/Task.js';
import { addNewTasks } from './modules/addNewTasks.js';
import { getWeather } from './modules/weatherModule.js';
import { taskListRender } from './modules/taskListRender.js';
import { makeFavorite } from './modules/makeFavorite.js';
import { getDate } from './modules/getDate.js';
import { renderNewList } from './modules/renderNewList.js';


document.addEventListener('DOMContentLoaded', () => {
  const btnAddNewTask = document.querySelector('.new-task__add-btn');
  const addListBtn = document.querySelector('.add-list__btn');
  const taskListContainer = document.querySelector('.main-tasks__list');
  const modalList = document.querySelector('.modal__list-name');
  const addNewListModalBtns = document.querySelectorAll('.modal-list__btn');
  const inputModalNamelist = document.querySelector('.modal-list__name-input');
  
  const allTasks = [];
  const allLists = [];

  //Test task for checking functionality
  const testTask = new Task('abcd12345', 'Learn English', {userList: 'sport', allTasksList: true, favoriteList: false});
  allTasks.push(testTask);
  console.log(testTask);

  function refreshElements(selector) {
    let elements = document.querySelectorAll(selector);
    return elements
  }

  function start () {
    taskListRender(allTasks, taskListContainer);

    let allDeleteBtns = refreshElements('.task-delete__btn');
    let allFavoriteBtns = refreshElements('.task-favorite__btn');
    makeFavorite(allFavoriteBtns, allTasks);

    getWeather();
    const weatherRefreshInterval = setInterval(getWeather, 2000000);
    getDate();
    
    btnAddNewTask.addEventListener('click', () => {
      let addedTask = addNewTasks();
      if (addedTask) {
        allTasks.push(addedTask);
      }

      taskListRender(allTasks, taskListContainer);

      let allDeleteBtns = refreshElements('.task-delete__btn');
      let allFavoriteBtns = refreshElements('.task-favorite__btn');
  
      makeFavorite(allFavoriteBtns, allTasks);
    })

    addListBtn.addEventListener('click', () => {
      modalList.classList.add('modal__list-name--active');
    });

    addNewListModalBtns.forEach( btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('modal-list__btn-confirm')){
          renderNewList();
          let newAddeUserList = inputModalNamelist.value;
          allLists.push(newAddeUserList);

          inputModalNamelist.value = '';
          modalList.classList.remove('modal__list-name--active');
        } else if (btn.classList.contains('modal-list__btn-cancel')) {
          inputModalNamelist.value = '';
          modalList.classList.remove('modal__list-name--active');
        }
      })
    })
  }

  start();
})
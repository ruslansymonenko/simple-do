import {addNewTasks} from './modules/addNewTasks.js';


document.addEventListener('DOMContentLoaded', () => {
  const btnAddNewTask = document.querySelector('.new-task__add-btn');

  const allTasks = [];

  function start () {
    
    btnAddNewTask.addEventListener('click', () => {
      let addedTask = addNewTasks();
      allTasks.push(addedTask);
    })
  }

  start();
})
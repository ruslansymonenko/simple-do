import {addNewTasks} from './modules/addNewTasks.js';


document.addEventListener('DOMContentLoaded', () => {
  const btnAddNewTask = document.querySelector('.new-task__add-btn');
  const taskList = document.querySelector('.main-tasks__list');

  const allTasks = [];

  function start () {
    
    btnAddNewTask.addEventListener('click', () => {
      let addedTask = addNewTasks();
      allTasks.push(addedTask);

      allTasks.forEach(item => {
        item.taskRender(taskList);
      })
    })
  }

  start();
})
import {addNewTasks} from './modules/addNewTasks.js';
import {Task} from './classes/Task.js';
import {getWeather} from './modules/weatherModule.js'


document.addEventListener('DOMContentLoaded', () => {
  const btnAddNewTask = document.querySelector('.new-task__add-btn');
  const taskList = document.querySelector('.main-tasks__list');
  
  const allTasks = [];

  //Test task for checking functionality
  // const testTask = new Task('abcd12345', 'Learn English', true, false);
  // allTasks.push(testTask);

  function taskListRendering () {
    allTasks.forEach(item => {
      item.taskRender(taskList);
    })
  }

  function start () {
    taskListRendering();
    getWeather();

    const weatherRefreshInterval = setInterval(getWeather, 2000000);

    
    btnAddNewTask.addEventListener('click', () => {
      let addedTask = addNewTasks();
      allTasks.push(addedTask);

      taskListRendering();
    })
  }

  start();
})
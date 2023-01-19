import { List } from './classes/List.js';
import { Task } from './classes/Task.js';
import { addNewTasks } from './modules/addNewTasks.js';
import { getWeather } from './modules/weatherModule.js';
import { taskListRender } from './modules/taskListRender.js';
import { makeFavorite } from './modules/makeFavorite.js';
import { getDate } from './modules/getDate.js';


document.addEventListener('DOMContentLoaded', () => {
  const btnAddNewTask = document.querySelector('.new-task__add-btn');
  const taskListContainer = document.querySelector('.main-tasks__list');
  
  const allTasks = [];

  //Test task for checking functionality
  const testTask = new Task('abcd12345', 'Learn English', {userList: 'sport', allTasksList: true, favoriteList: false});
  allTasks.push(testTask);
  console.log(testTask);
  console.log(testTask.getTaskList())

  function refreshElements(selector) {
    let elements = document.querySelectorAll(selector);
    return elements
  }

  function start () {
    taskListRender(allTasks, taskListContainer);
    let allDeleteBtns = refreshElements('.task-delete__btn');
    let allFavoriteBtns = refreshElements('.task-favorite__btn');

    makeFavorite(allFavoriteBtns, allTasks);


    //Weather
    getWeather();
    const weatherRefreshInterval = setInterval(getWeather, 2000000);

    //Date
    getDate();
    
    btnAddNewTask.addEventListener('click', () => {
      let addedTask = addNewTasks();
      allTasks.push(addedTask);

      taskListRender(allTasks, taskListContainer);

      let allDeleteBtns = refreshElements('.task-delete__btn');
      let allFavoriteBtns = refreshElements('.task-favorite__btn');
  
      makeFavorite(allFavoriteBtns, allTasks);
    })


  }

  start();
})
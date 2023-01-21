import {Task} from '../classes/Task.js';
import {checkScrollbarVisible} from './checkScrollbarVisible.js'

export function addNewTasks () {
  const taskList = document.querySelector('.main-tasks__list');
  const taskListElements = document.querySelectorAll('.main-tasks__list-item');
  const inputNewTaskText = document.querySelector('.new-task__text');

  let task;

  if (inputNewTaskText.value) {
    let id ="id" + Math.random().toString(16).slice(2);

    task = new Task(id, inputNewTaskText.value, {userList: '', allTasksList: true, favoriteList: false}); 

    inputNewTaskText.value = '';
    checkScrollbarVisible(taskList, taskListElements);
  } else {
    alert('Please, write task text');
  }

  return task
}

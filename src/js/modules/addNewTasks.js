import {Task} from '../classes/Task.js';
import {checkScrollbarVisible} from './checkScrollbarVisible.js'

export function addNewTasks () {
  const categoryList = document.querySelector('.main-category__list');
  const taskList = document.querySelector('.main-tasks__list');
  const categoryListElements = document.querySelectorAll('.main-category__list-item');
  const taskListElements = document.querySelectorAll('.main-tasks__list-item');
  const inputNewTaskText = document.querySelector('.new-task__text');
  const btnAddNewTask = document.querySelector('.new-task__add-btn');

  let task;

  if (inputNewTaskText.value) {
    let id ="id" + Math.random().toString(16).slice(2);

    task = new Task(id, inputNewTaskText.value);;
    task.taskRender(taskList)

    checkScrollbarVisible(taskList, taskListElements)
  } else {
    alert('Please, write task text');
  }

  return task
}

import {taskRender} from './taskRender.js'
import {checkScrollbarVisible} from './checkScrollbarVisible.js'

export function addNewTasks () {
  const categoryList = document.querySelector('.main-category__list');
  const taskList = document.querySelector('.main-tasks__list');
  const categoryListElements = document.querySelectorAll('.main-category__list-item');
  const taskListElements = document.querySelectorAll('.main-tasks__list-item');
  const inputNewTaskText = document.querySelector('.new-task__text');
  const btnAddNewTask = document.querySelector('.new-task__add-btn');

  btnAddNewTask.addEventListener('click', () => {
    if (inputNewTaskText.value) {
      taskRender(inputNewTaskText.value);
      checkScrollbarVisible(taskList, taskListElements)
    } else {
      alert('Please, write task text');
    }
  })
}

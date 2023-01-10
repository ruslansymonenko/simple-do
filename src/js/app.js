import {addNewTasks} from './modules/addNewTasks.js';


document.addEventListener('DOMContentLoaded', () => {
  function start () {
    console.log('start');
    addNewTasks();
  }

  start();
})
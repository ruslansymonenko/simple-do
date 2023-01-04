export function addNewTasks () {
  const inputNewTaskText = document.querySelector('.new-task__text');
  const btnAddNewTask = document.querySelector('.new-task__add-btn');

  btnAddNewTask.addEventListener('click', () => {
    if (inputNewTaskText.value) {
      console.log(inputNewTaskText.value);
    } else {
      alert('Please, write task text');
    }
  })
}

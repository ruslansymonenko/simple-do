export function taskListRender(arr, taskContainer) {
  const taskList = document.querySelectorAll('.main-tasks__list-item');

  taskList.forEach(item => item.remove());

  arr.forEach(item => {
    item.taskRender(taskContainer);
  })
}
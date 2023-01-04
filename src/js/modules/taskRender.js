export function taskRender (taskText, checked = false, favorite = false) {
  const taskList = document.querySelector('.main-tasks__list');

  let taskForRendering = {
    check: checked,
    text: taskText,
    isFavorite: favorite
  };

  function createTask (check, text, isFavorite = false) {
    let task = document.createElement('li');
    task.classList.add('main-tasks__list-item');

    let checkBox = document.createElement('input');
    checkBox.classList.add('task-check');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = check;

    let textContainer = document.createElement('div');
    textContainer.classList.add('task-text');
    textContainer.textContent = text;

    let btnsContainer = document.createElement('div');
    btnsContainer.classList.add('task-btns');



    let favoriteBtn = document.createElement('button');
    favoriteBtn.classList.add('task-favorite__btn');

    let favoriteImg = document.createElement('img');
    favoriteImg.setAttribute('src', './src/images/favorite-ico.svg');

    favoriteBtn.append(favoriteImg);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-delete__btn');

    let deleteImg = document.createElement('img');
    deleteImg.setAttribute('src', './src/images/trash-ico.svg');

    deleteBtn.append(deleteImg);

    btnsContainer.append(favoriteBtn);
    btnsContainer.append(deleteBtn);
    

    task.append(checkBox);
    task.append(textContainer);
    task.append(btnsContainer);

    taskList.append(task);
  }

  createTask(taskForRendering.check, taskForRendering.text, taskForRendering.isFavorite);
}
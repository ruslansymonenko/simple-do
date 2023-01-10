export class Task {
  constructor (id, taskText, isFavorite = false, check = false) {
    this.id = id;
    this.check = check;
    this.taskText = taskText;
    this.isFavorite = isFavorite;
  }

  taskRender (container) {
    let task = document.createElement('li');
    task.classList.add('main-tasks__list-item');

    if (this.isFavorite === true) {
      task.classList.add('main-tasks__list-item--favorite');
    }

    let checkBox = document.createElement('input');
    checkBox.classList.add('task-check');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.checked = this.check;

    let textContainer = document.createElement('div');
    textContainer.classList.add('task-text');
    textContainer.textContent = this.taskText;

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

    container.append(task);
  }
}


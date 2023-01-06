export function checkScrollbarVisible (list, listElements) { 

  function checkListLength (elements, quantity) {
    if ((elements.length + 1) >= quantity) {
      return true
    } else {
      return false
    }
  }

  if (list.classList.contains('main-category__list')) {
    let checker = checkListLength(listElements, 7);

    if (checker == true) {
      document.documentElement.style.setProperty("--scrolbar-category-list", "scroll");
    } else {
      document.documentElement.style.setProperty("--scrolbar-category-list", "none");
    }

  } else if (list.classList.contains('main-tasks__list')) {
    let checker = checkListLength(listElements, 4);
    console.log(checker);

    if (checker == true) {
      document.documentElement.style.setProperty("--scrolbar-task-list", "scroll");
    } else {
      document.documentElement.style.setProperty("--scrolbar-task-list", "none");
    }
  }
}
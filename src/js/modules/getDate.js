export function getDate () {
  const dayContainer = document.querySelector('.header-info__date-day');
  const monthContainer = document.querySelector('.header-info__month-name');
  const dateContainer = document.querySelector('.header-info__date-date');

  let date = new Date();

  const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const monthsOfTheYear = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

  dayContainer.textContent = daysWeek[date.getDay() - 1];
  monthContainer.textContent = monthsOfTheYear[date.getMonth()];
  dateContainer.textContent = date.getDate();
}
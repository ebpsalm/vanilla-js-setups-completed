const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const dateSentence = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const list = deadline.querySelectorAll('h4');
const recurringDate = new Date();
const recurDay = recurringDate.getDate();
const recurYear = recurringDate.getFullYear();
const recurMonth = recurringDate.getMonth();
const futureDate = new Date(recurYear, recurMonth, recurDay + 10, 11, 25);

dateSentence.textContent = `giveaway ends on ${
  weekdays[futureDate.getDay()]
}, ${futureDate.getDate()} ${
  months[futureDate.getMonth()]
} ${futureDate.getFullYear()}, ${futureDate.getHours()}:${futureDate.getMinutes()}`;
function displayDouble(item) {
  if (item < 10) {
    return `0${item}`;
  }
  return item;
}
function countOut() {
  const today = new Date();
  const realTime = today.getTime();
  const futureTime = futureDate.getTime();
  const difference = futureTime - realTime;
  const days = difference / (24 * 60 * 60 * 1000);
  // list[0].textContent = Math.floor(days);
  const remainder1 = difference % (24 * 60 * 60 * 1000);
  const hours = remainder1 / (60 * 60 * 1000);
  // list[1].textContent = Math.floor(hours);
  const remainder2 = remainder1 % (60 * 60 * 1000);
  const mins = remainder2 / (60 * 1000);
  // list[2].textContent = Math.floor(mins);
  const remainder3 = remainder2 % (60 * 1000);
  const secs = remainder3 / 1000;
  // list[3].textContent = Math.floor(secs);

  const values = [days, hours, mins, secs];
  list.forEach((time, index) => {
    time.textContent = displayDouble(Math.floor(values[index]));
  });
  if (difference < 0) {
    clearInterval(interval);
    deadline.innerHTML = `<h4>sorry this offer has expired</h4>`;
  }
}
const interval = setInterval(countOut, 1000);
countOut();

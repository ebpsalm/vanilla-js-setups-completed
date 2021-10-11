const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
const betterBtns = [...btns];
let count = 0;

betterBtns.forEach(function (btn) {
let hasClass = btn.classList
 btn.addEventListener('click', function() {
if (hasClass.contains('increase')) {
count ++;
} else if (hasClass.contains('decrease')) {
 count --;
} else {
 count = 0;
}
if (count > 0) {
 value.style.color = 'green';
} else if (count < 0){
 value.style.color = 'rgb(255, 0, 0)';
} else {
 value.style.color = 'rgb(0, 0, 0)';
}
value.textContent = count;
 })
})

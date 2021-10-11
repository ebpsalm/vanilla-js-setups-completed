//using selectors inside the element
// traversing the dom
// const text = document.querySelectorAll('.question');
// text.forEach(function (para) {
//   const btns = para.querySelector('.question-btn');
//   btns.addEventListener('click', function (e) {
//     para.classList.toggle('show-text');
//     text.forEach(function (item) {
//       console.log(item);
//       if (item !== para) {
//         item.classList.remove('show-text');
//       }
//     });
//   });
// });
const btns = document.querySelectorAll('.question-btn');
const text = document.querySelectorAll('.question');
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const parentEl = e.currentTarget.parentElement.parentElement;
    parentEl.classList.toggle('show-text');
    text.forEach(function (item) {
      if (item !== parentEl) {
        item.classList.remove('show-text');
      }
    });
  });
});

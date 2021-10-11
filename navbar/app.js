// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btn = document.getElementsByClassName('nav-toggle');
const ulEl = document.getElementsByClassName('links');


btn[0].addEventListener('click', function (e) {
  // if (ulEl[0].classList.contains('show-links')) {
  //   ulEl[0].classList.remove('show-links');
  // } else {
  //   ulEl[0].classList.add('show-links');
  // }
  ulEl[0].classList.toggle('show-links');
});

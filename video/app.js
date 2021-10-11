// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const switchBtn = document.querySelector('.switch-btn');
const videoEl = document.querySelector('.video-container');
const preloaderContainer = document.querySelector('.preloader');
window.addEventListener('load', function (e) {
  preloaderContainer.classList.add('hide-preloader');
});
switchBtn.addEventListener('click', function (e) {
  const hasClass = switchBtn.classList;
  if (hasClass.contains('slide')) {
    hasClass.remove('slide');
    videoEl.play();
  } else {
    hasClass.add('slide');
    videoEl.pause();
  }
});

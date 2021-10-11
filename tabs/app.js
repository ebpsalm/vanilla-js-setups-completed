const majorArticle = document.querySelector('.about');
const btns = majorArticle.querySelectorAll('.tab-btn');
const targetEls = document.querySelectorAll('.content');
majorArticle.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  if (id) {
    e.target.classList.add('active');
    targetEls.forEach((content) => {
      content.classList.remove('active');
    });
    const targetEl = document.getElementById(id);
    targetEl.classList.add('active');
  }
});

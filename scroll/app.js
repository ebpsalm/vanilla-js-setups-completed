// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const dateEl = document.querySelector('footer span');

const date = new Date().getFullYear();
dateEl.textContent = date;

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
navToggle.addEventListener('click', function (e) {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const nav = document.querySelector('header nav');
const topLink = document.querySelector('.top-link');
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener('scroll', function () {
  const scrollHeight = pageYOffset;
  // console.log(navHeight);
  // console.log(pageYOffset);
  if (scrollHeight > navHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// // ********** smooth scroll ************
// // select links
const allLinks = document.querySelectorAll('.scroll-link');
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href');
    const element = document.querySelector(id);
    let position = element.offsetTop - navHeight;
    const fixedNav = nav.classList.contains('fixed-nav');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (containerHeight > 0 && !fixedNav) {
      position = position - containerHeight;
    }
    if (containerHeight > 0 || fixedNav) {
      position = position;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

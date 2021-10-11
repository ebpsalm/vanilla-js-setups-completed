// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
const submitBtn = document.querySelector('.submit-btn');
const alertPara = document.querySelector('.alert');
const container = document.querySelector('.grocery-container');
const inputEl = document.getElementById('grocery');

// edit option
let editEl;
let editId = '';
let editFlag = false;
// ****** EVENT LISTENERS **********
window.addEventListener('DOMContentLoaded', displayItems);
form.addEventListener('submit', workWithItems);
clearBtn.addEventListener('click', clearItems);
// ****** FUNCTIONS **********
function workWithItems(e) {
  e.preventDefault();
  const value = inputEl.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createElement(id, value);
    addItemToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editEl.textContent = value;
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displayAlert('please enter text', 'danger');
    setBackToDefault();
  }
}
function createElement(id, value) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  element.setAttribute('data-id', id);
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);
  list.appendChild(element);
  container.classList.add('show-container');
}
function clearItems() {
  const elements = list.querySelectorAll('.grocery-item');
  elements.forEach(function (element) {
    list.removeChild(element);
  });
  localStorage.removeItem('list');
  setBackToDefault();
  container.classList.remove('show-container');
}
function deleteItem(e) {
  const deleteEl = e.currentTarget.parentElement.parentElement;
  const id = deleteEl.dataset.id;
  list.removeChild(deleteEl);
  removeFromLocalStorage(id);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }

  setBackToDefault();
}
function editItem(e) {
  const editParent = e.currentTarget.parentElement.parentElement;
  editEl = e.currentTarget.parentElement.previousElementSibling;
  editId = editParent.dataset.id;
  editFlag = true;
  inputEl.value = editEl.textContent;
  submitBtn.textContent = 'edit';
}
function displayAlert(text, color) {
  alertPara.textContent = text;
  alertPara.classList.add(`alert-${color}`);
  setTimeout(function () {
    alertPara.textContent = '';
    alertPara.classList.remove(`alert-${color}`);
  }, 1000);
}
function setBackToDefault() {
  inputEl.value = '';
  submitBtn.textContent = 'submit';
  editFlag = false;
  editId = '';
  editEl;
}
// ****** LOCAL STORAGE **********
function addItemToLocalStorage(id, value) {
  const singleItem = { id, value };
  const items = getLocalStorage();
  items.push(singleItem);
  localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(editId, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === editId) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem('list', JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

// ****** SETUP ITEMS **********
function displayItems() {
  items = getLocalStorage();
  if (items.length > 0) {

  items.forEach((item) => {
    createElement(item.id, item.value);
  });
  }
}

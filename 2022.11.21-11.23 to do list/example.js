let todo = JSON.parse(localStorage.getItem('todoList'))||[];
let tabStatus = 'all';

const list = document.querySelector('.list');
const newTodo = document.querySelector('.js_new_todo');
const add = document.querySelector('.btn_add');
const total = document.querySelector('.js_total');
const tab = document.querySelector('.tab');
const deleteAll = document.querySelector('.js_delete_all');

const render = (data) => {
  let content = '';

  data.forEach((item) => {
    content += `<li data-id="${item.id}">
      <label class="checkbox" for="">
        <input type="checkbox" ${item.status ? 'checked' : ''} />
        <span>${item.task}</span>
      </label>
      <a href="#" class="delete"></a>
    </li>
    `;
  });

  list.innerHTML = content;
  total.textContent = todo.filter((item) => !item.status).length;
}

const getList = () => {
  let filterTodo = tabStatus === 'all' ? todo : todo.filter((item) => item.status === tabStatus);
  render(filterTodo);
}

getList();

const addTodo = () => {
  if (!newTodo.value.trim()) {
    alert('請輸入待辦事項');
    return;
  }

  todo.push({
    id: new Date().getTime(),
    task: newTodo.value,
    status: 0
  })

  newTodo.value = '';
  tabStatus = 'all';

  localStorage.setItem('todoList', JSON.stringify(todo));
  changeTab();
  getList();
}

add.addEventListener('click', addTodo);
newTodo.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    addTodo();
  }
});

// 刪除和切換勾選
list.addEventListener('click', (e) => {
  // 透過 closest 的方法，取得自己想要的父層元素 li
  let id = parseInt(e.target.closest('li').dataset.id);
  let index = todo.findIndex((item) => item.id === id);

  if (e.target.getAttribute('class') === 'delete') {
    e.preventDefault();
    todo.splice(index, 1);
  } else {
    todo[index].status = todo[index].status ? 0 : 1;
  }

  localStorage.setItem('todoList', JSON.stringify(todo));
  getList();
})

const changeTab = () => {
  const tabItem = document.querySelectorAll('.tab > li');
  tabItem.forEach((item) => {
    item.classList.remove('active');

    if (item.dataset.status === tabStatus.toString()) {
      item.classList.add('active');
    }
  });
}

// tab 切換
tab.addEventListener('click', (e) => {
  let status = e.target.dataset.status;
  tabStatus = status !== 'all' ? parseInt(status) : status;

  changeTab();
  getList();
})

deleteAll.addEventListener('click', (e) => {
  e.preventDefault();
  // 透過 filter 篩選出待完成項目
  todo = todo.filter((item) => !item.status);
  tabStatus = 'all';

  localStorage.setItem('todoList', JSON.stringify(todo));
  changeTab();
  getList();
})
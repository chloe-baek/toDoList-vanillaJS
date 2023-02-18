'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  // console.dir(e.target.parentElement.innerText);
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintToDo(newTodo) {
  //   console.log('I will paint', newTodo);
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerHTML = newTodo.text;
  const button = document.createElement('button');
  button.innerHTML = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  //   console.log(newTodo);
  toDoInput.value = '';
  //   console.log(newTodo, toDoList.value);
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveTodos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// function sayHello(item) {
//   console.log('ths is the turn of ' + item);
// }

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos);

if (savedTodos) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  console.log(parsedToDos);

  parsedToDos.forEach(paintToDo);
}

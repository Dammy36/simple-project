/*renderTodoList();

function renderTodoList() {
  let todoList = ["make dinner", "wash dishes"];

  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    let todo = todoList[i];
    let html = `<p> ${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  let element = document.querySelector(".js-todo");
  element.innerHTML = todoListHTML;
}
function myList() {
  let inputElement = document.querySelector(".js-todo-input");
  let name = inputElement.value;

  todoList.push(name);
  console.log(todoList);
  //to remove text from the input
  inputElement.value = "";

  renderTodoList();
}

//loops let us runour codes over and over
*/
//const nums = [10, 20, 30];
//nums[0] = 99;
//console.log(nums);

function getLastValue(array) {
  let lastIndex = "";
  for (let i = 0; i < array.lenght; i++) {}
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[firstValue];
  return array;
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(["hi", "hello", "hey"]));

function arraySwap(array) {
  lastIndex = array.lenght - 1;
  // we need to save the values first before
  //swapping. otherwise, if we swap directly,
  // we could lose one of the values.
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;

  array[firstValue];
  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "hey"]));

// loop that count up from 0 to, 10 ,
// but counts up by 2 (0, 2, 4,...8,10)

for (i = 0; i < 10; i += 2) {
  console.log(i);
}
// create a loop that count dow from 5
for (i = 0; i > 5; i--) {
  cconsole.log(i);
}

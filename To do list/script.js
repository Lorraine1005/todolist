const inputSaveBtn = document.getElementById("input-save-btn");
const inputEl = document.getElementById("input-el");
const removeTaskEl = document.getElementById("remove-task");
const ulEl = document.getElementById("ul-el");
let tasks = [];
inputSaveBtn.addEventListener("click", function () {
  tasks.push(inputEl.value);
  displayTasks();
});
function displayTasks() {
  let listItems = "";
  for (i = 0; i < tasks.length; i++) {
    listItems += `
    <div class="task-list">
    <input type="checkbox" class="checkbox">

        <li id ="li">${tasks[i]}</li>
        <button onclick = "removeTask(${i}) " class="btn li-btn">
        Delete
        </button>
    </div>`;
  }
  ulEl.innerHTML = listItems;
  inputEl.value = "";
}
function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

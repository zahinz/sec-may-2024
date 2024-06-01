// Form submission in JavaScript
// Append new child to the parent

const taskForm = document.querySelector("#taskForm");
const tasksList = document.querySelector("#tasksList");

taskForm.addEventListener("submit", function (event) {
  // Prevent the default form submission
  // by default, the form will submit a request to the server and reload the page
  event.preventDefault();

  // event.target is Node List or array of all form elements
  const task = event.target[0].value;
  console.log(task);

  // add new list inside the ol

  // 1. create a new list element
  const newList = document.createElement("li");

  // 2. change the inner text of the newly created list element
  newList.innerText = task;

  // 3. append the newly created list element to the ol
  // append is a method that appends a child to the parent
  tasksList.appendChild(newList);

  // 4. clear the input field or reset the form
  //   event.target.reset();
  taskForm.reset();
});

// Todo App - Assesment
// 1. Add a delete button to each task
// 2. When the delete button is clicked, the task should be removed from the list
// 3. Add a checkbox to each task
// 4. When the checkbox is checked, the text should have a line-through
// 5. When the checkbox is unchecked, the line-through should be removed

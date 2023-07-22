# To-Do List Application

This is a simple to-do list application that allows users to add, delete, and filter tasks. It uses HTML, CSS, and JavaScript for the front-end functionality.

## JavaScript Code Explanation

### `function addTask() { ... }`
This function is called when the user clicks the "Add Task" button or presses the "Enter" key after typing a task in the input field. It retrieves the task input, creates a new list item (li) with the task text, attaches a delete button to the list item, and appends it to the task list. It also calls `updateLocalStorage()` to save the tasks in Local Storage.

### `function updateLocalStorage() { ... }`
This function is responsible for updating the tasks array and saving it to Local Storage as a JSON string. It extracts the text content of each list item (task) and adds it to the `tasks` array. Then it uses `localStorage.setItem()` to store the tasks array in the browser's Local Storage.

### `document.getElementById("taskInput").addEventListener("keydown", function(event) { ... })`
This line adds an event listener to the input field with the ID "taskInput". It listens for a "keydown" event, which occurs when a key is pressed while the input field is focused. When the "Enter" key is pressed, it calls the `addTask()` function to add the task to the list.

### `function loadTasksFromLocalStorage() { ... }`
This function is called on page load to retrieve tasks from Local Storage and display them on the page. It retrieves the tasks array from Local Storage, creates new list items with the task text, attaches delete buttons, and appends them to the task list.

## How to Use
1. Type a task in the input field.
2. Press the "Add Task" button or press the "Enter" key to add the task to the list.
3. Click the "Delete" button next to a task to remove it from the list and Local Storage.
4. Use the "Filter Active" and "Filter Completed" buttons to view active or completed tasks only.
5. Click the "Clear All" button to remove all tasks from the list and Local Storage.

## Contributions
Contributions are welcome! If you have any suggestions or improvements, please feel free to create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

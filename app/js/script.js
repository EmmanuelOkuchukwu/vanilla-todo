// Declaring the id elements from the html as constants
const addTodo = document.getElementById('functionSubmit');
const inputTodo = document.getElementById('inputControl');
const todoContainer = document.getElementById('todosDisplay');

// adding an add event lister for creating a todoitem
addTodo.addEventListener("click", function() {
    const list = document.createElement('p');
    list.innerText = inputTodo.value;
    todoContainer.appendChild(list);

    //adding an add event listner for completed todoitem
    list.addEventListener("click", function () {
        list.style.backgroundColor = "red";
        list.style.textDecoration = "line-through";
    });

    // adding an add event listner for deleting a todoitem
    list.addEventListener("dblclick", function () {
        todoContainer.removeChild(list);
    });
});

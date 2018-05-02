const url = '/api/todos';
const list = document.querySelector('.list');
const input = document.getElementById('todoInput');


// Get Todos
fetch(url)
    .then((res) => {
        if (!res.ok) {
            throw Error(res.statusText);
        }
        return res;
    })
    .then((res) => res.json())
    .then((res) => addTodos(res))
    .catch((err) => console.log(err));


function addTodos(todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

function addTodo(todo) {
    let newTodo
    if (!todo.completed) {
        newTodo = `
            <li class="task">${todo.name} <span>X</span></li>
        `;
    }
    else {
        newTodo = `
            <li class="task done">${todo.name} <span>X</span></li>
        `;
    }
    list.innerHTML += newTodo;
}

function createTodo() {
    const inputVal = input.value;

    const data = JSON.stringify({name: inputVal});

    fetch(url, {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(input.value = '')
      .then(res => res.json())
      .catch(err => console.error('Error:', err))
      .then(res => addTodo(res));
}

// Event Listener
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        createTodo();
    }
});
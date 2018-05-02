const url = '/api/todos';

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
    const list = document.querySelector('.list');
    todos.forEach((todo) => {
        const newTodo = `<li class="task">${todo.name}</li>`;
        list.innerHTML += newTodo;
    });
}
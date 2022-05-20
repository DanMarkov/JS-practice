/* todo.js */

/**
 * @typedef {{title: String, isCompleted: Boolean, icon: String, category: String, author: Object}} Todo
 *
 * @param {object} data
 */
 export function createTodo(data) {
	console.log(data);

    let icon = "⏳";

    if (data.completed){
        icon = "✅";
    }

    return {
        title: data.todoTitle,
        isCompleted: data.completed,
        icon: icon,
        category: data.chosenCategory,
        author: {
            firstName: data.user.first,
            lastName: data.user.last
        },
        countTodos: 1

    };
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 */
export function addTodo(todos, todo) {
	todos.push(todo);
    return todos;
}

/**
 * @param {Todo[]} todos
 */
export function countTodos(todos) {
	let sum = 0; 
    todos.forEach(function(todo){
        sum += todo.countTodos;
    });
    return sum;

}

/**
 * @param {Todo[]} todos
 */
export function firstTodoTitle(todos) {
	return todos[0].title;
}

/**
 * @param {Todo[]} todos
 */
export function lastTodoTitle(todos) {
	return todos[todos.length - 1].title;
}

/**
 * @param {Todo[]} todos
 */
export function exportTitles(todos) {
	return todos.map(function(todo){
        return todo.title;
    }).join(", ");
}
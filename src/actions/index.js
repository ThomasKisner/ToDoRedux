export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO'
let nextTodoId = 0


export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const addToDo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})
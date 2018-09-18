import {TOGGLE_TODO, ADD_TODO} from '../actions'

export const initialState = [
    {task: 'dont be totally confused', 
    completed: false,
    id: 0,
}
]

export function ToDo(state = initialState, action){
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
            {
                id: action.id,
                text: action.text,
                completed: false,
            }
            ]
        case TOGGLE_TODO:
        return  state.map(todo =>
            (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
        default:
        return state;
    }
}
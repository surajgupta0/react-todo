import React, {useContext} from "react";

export const TodoContext = React.createContext({
    todos: [
        { 
            id: 1,
            todo: "Hello World" ,
            completed: false 
        }
        ],
        addTodo: (todo) => {},
        removeTodo: (id) => {},
        updateTodo: (id, todo) => {},
        toggleTodo: (id) => {}
});
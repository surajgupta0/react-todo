import { useState, useContext } from "react"

import { TodoContext } from "../context/TodoContext"
import TodoList from "./TodoList"

function Todo(){
    const [todo, setTodo] = useState("")
    const {todos, addTodo, removeTodo, updateTodo, toggleTodo} = useContext(TodoContext)

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTodo(todo);
            setTodo(""); // Clear the input field after adding the todo
        }
    };
    return(
        <div className="todo_conntainer">
            <h2>Todo App</h2>
            <div className="todo_input_container">
                <input  type="text" value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={handleKeyDown} placeholder="Add your Task..." />
                <button onClick={() => {addTodo(todo); setTodo("");}}><i className="bi bi-plus-circle-fill"></i></button>
            </div>
            <ul className="todo_list_container">
                {todos.map(stodo => (
                    <>
                        <TodoList todo={stodo} removeTodo={removeTodo} updateTodo={updateTodo} toggleTodo={toggleTodo} />
                    </>
                ))}
            </ul>
        </div>
    )
}

export default Todo
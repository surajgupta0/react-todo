import { useState, useRef, useEffect } from "react";
import '../App.css';
function TodoList({ todo, removeTodo, updateTodo, toggleTodo}) {
    const [isDisabled, setDisabled] = useState(true)
    const inputRef = useRef(null)

    useEffect(() => {
        if (!isDisabled) {
            inputRef.current.focus();
        }
    }, [isDisabled]);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setDisabled(true);
            inputRef.current.blur();
        }
    };

    return(
    <li key={todo.id} className= {todo.completed ? "todo_completed_list" : ""}>
        <input className="todo_checkbox" type = "checkbox" checked = {todo.completed} onChange = {() => toggleTodo(todo.id)}  />
        <input className= {todo.completed ? "todo_single_input todo_completed" : "todo_single_input"} disabled={isDisabled} type = "text" value = {todo.todo} onChange = {(e) => updateTodo(todo.id, e.target.value)} ref={inputRef} onKeyDown={handleKeyDown}/>
        <button className="todo_editble" onClick = {()=>setDisabled(!isDisabled)}>{isDisabled ? <i className='bi bi-pencil-fill'></i> : <i className="bi bi-cursor-fill"></i>}</button>
        <button className="todo_delete" onClick = {(e) => removeTodo(todo.id)}><i className="bi bi-x-circle-fill"></i></button>
    </li>
    )
}

export default TodoList;
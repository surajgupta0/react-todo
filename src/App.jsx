import { useState, useEffect } from 'react'
import './App.css'
import { TodoContext } from './context/TodoContext'
import Todo from './components/Todo'

function App() {

  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todos, {id: Date.now(), todo:todo, completed: false}])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos(todos.map(stodo => stodo.id === id ? {...stodo, todo : todo} : stodo))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(stodo => stodo.id === id ? {...stodo, completed: !stodo.completed} : stodo))
  }

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoContext.Provider value={{todos, addTodo, removeTodo, updateTodo, toggleTodo}}>
      <Todo></Todo>
    </TodoContext.Provider>
  )
}

export default App


import './App.css'
import TodaCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]) // öncekileri getirir ve üzerine newTodo ekler
  }
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })

    setTodos([...updatedTodos]);
  }

  console.log(todos);

  return (
    <div className='App'>

      <div className="todo-container">
        <TodaCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>


    </div>
  )
}

export default App

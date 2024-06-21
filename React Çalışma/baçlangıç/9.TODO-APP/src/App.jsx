
import './App.css'
import TodaCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]) // öncekileri getirir ve üzerine newTodo ekler
  }
  console.log(todos);
  return (
    <div className='App'>

      <div className="todo-container">
        <TodaCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} />
      </div>


    </div>
  )
}

export default App

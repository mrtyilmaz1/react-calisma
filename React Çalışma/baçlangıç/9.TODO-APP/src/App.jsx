
import './App.css'
import TodaCreate from './components/TodaCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='App'>

      <div className="todo-container">
        <TodaCreate />
        <TodoList />
      </div>


    </div>
  )
}

export default App

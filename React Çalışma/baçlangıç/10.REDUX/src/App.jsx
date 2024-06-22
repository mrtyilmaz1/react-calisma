
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';


function App() {

  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log({ value })

  return (
    <div>
      <div>{value}</div>
      <div><button onClick={() => dispatch(increment())}>arttır</button></div>
      <div><button onClick={() => dispatch(decrement())}>azalt</button></div>
    </div>
  )
}

export default App

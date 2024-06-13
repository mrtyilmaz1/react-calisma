/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'

function App() {

  const handleChange = () => {
    setFirstName("Ahmet")

  }

  const [firstName, setFirstName] = useState("Murat");
  const [lastName, setLastName] = useState("Yılmaz");

  return (
    <div>
      <div>{firstName} {lastName}</div>
      <button onClick={handleChange}>İsmi Değiştir</button>

    </div>
  )
}

export default App

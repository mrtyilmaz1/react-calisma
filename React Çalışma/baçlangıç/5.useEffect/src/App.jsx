
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  useEffect(() => {
    console.log('Herzaman çalışır.')
  })

  useEffect(() => {
    console.log('ilk render edildiğinde çalışır.')

  }, [])

  useEffect(() => {
    console.log('ilk render edildiğinde ve (firstName veya lastName) değiştiğinde çalışır.')
  }, [firstName, lastName])

  // useEffect(() => {
  //   console.log('ilk render edildiğinde ve lastName değiştiğinde çalışır.')
  // }, [lastName])


  return (

    <div>
      <div><button onClick={() => setFirstName("Ahmet")}>Adı değiştir</button></div>
      <div><button onClick={() => setLastName("Yılmaz")}>Soyadı değiştir</button></div>

    </div>

  )
}

export default App


import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005"

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users")
    console.log(response.data)

  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId)
    console.log(response.data)

  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response:", response.data)

  }

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
    console.log("response:", response.data)

  }

  const deleteUser = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log("response:", response.data)

  }

  useEffect(() => {
    // getAllUsers()
    // getUserById(2)
    // const newUser = {
    //   "username": "Umut",
    //   "password": "11"
    // }
    // createUser(newUser)
    // updateUser("1", newUser)
    deleteUser("1dc7")
  }, [])


  return (
    <div>
      asd
    </div>
  )
}

export default App

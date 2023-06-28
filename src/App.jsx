import { useState } from 'react'
import { useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fakename } from './api/fakename'
import { AddUser } from './Store/Slices/UserSlice'
import { DisplayUser } from './DisplayUser'
// import { DeleteAllUsers } from './Store/Slices/UserSlice'
import { DeleteAllUsers } from './Store/actions'

function App() {

  const dispatch = useDispatch()

  const addNewUser=(name)=>{
    dispatch(AddUser(name))    
  }

  const DeleteUsers=()=>{
    dispatch(DeleteAllUsers())

  }

  return (
    <>
    <button onClick={()=> addNewUser(fakename())}>Add Users</button>
    <DisplayUser/>
    <button onClick={()=>DeleteUsers() }>Delete all users</button>

    </>
  )
}

export default App

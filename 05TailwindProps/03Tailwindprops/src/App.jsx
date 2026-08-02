import { useState } from 'react'
import Card from './Components/Card'

function App() {

  const obj = {
    username : "Ishan",
    age : 22,
    isActive : true
  }

  function sayHello() {
        alert("Hello");
    }


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello | Ishan</h1> 

      <Card name = "Card 1"  myObject = {obj} btnClick = {sayHello}/>
      <Card name = "Card 2" btnText = "Click here" btnClick = {sayHello}/>
    </>
  )
}

export default App

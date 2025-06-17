import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
{/*  function handleClick() 
      {
         console.log(1)
      }

  return (
    <>
       <button onClick={handleClick} >
        click me
      </button>
    </>)*/}

    //parameter using template literals
    const handleUser = (user) =>{
      console.log(`hello ${user}`)
    }

  return(
    <>
    {/*argument need to use this function natra argument pass garna mildaina*/} 
    <button onClick={()=> handleUser("harry") }> click</button>
    </>
  )
}

export default App

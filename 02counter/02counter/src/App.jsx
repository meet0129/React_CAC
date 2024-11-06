import { useState } from 'react'
import './App.css'
// import './index.css'

function App() {

  const [counter, setcounter] = useState(0)
  
  const addvalue=()=>{
    console.log("value added");
    if(counter<10)
    {
      setcounter(counter+1);
    }
    else
    {
      console.log("Maximum limit reached")
    }
  }
  const removevalue=()=>{
    console.log("value removed");
    if(counter>=1){
      setcounter(counter-1);
    }
    else
    {
      console.log("Minimum value reached")
    }
  }
  
  return (
    <>
 
      <h1>React and react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>add value</button>
      <button onClick={removevalue }>decrease value</button>
    </>
  )
}

export default App

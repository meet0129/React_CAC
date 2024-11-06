import { useCallback, useEffect, useState ,useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [length,setLength]=useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(() =>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
    
  },[length,numberAllowed,charAllowed,passwordGenerator])

  //use ref
  const passwordRef = useRef(null)

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md text-white bg-gray-600 px-11 py-5 rounded-lg font-medium text-lg'>Password Generator
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input 
          type="text"  
          value={password}
          className='outline-none w-full py-1 px-3 bg-gray-400'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copytoclipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={2}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={charAllowed}
              id="CharInput"
              onChange={()=>{
                setCharAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>

          </div>
        </div>

      </div>
    </>
  )
}

export default App

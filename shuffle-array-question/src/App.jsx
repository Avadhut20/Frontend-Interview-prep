import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([
    'Apple',  
    'Mango',
    'Banana',
    "Guava"
  ])
  const handleClick=()=>{
    const shuffled = [...list];
    for(let i= shuffled.length-1;i>=0 ;i--){
      let j= Math.floor(Math.random()*(i+1));
      [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    }
    setList(shuffled);
  }

  return (
    <div>
      <h1>List of fruits</h1>
      <div>
        <ul>
          {list.map((ele,index)=>(
              <li key={index}> {ele} </li>
          ))}
        </ul>
      </div>
      <button onClick={handleClick}> Shuffule array</button>
    </div>
  )
}

export default App

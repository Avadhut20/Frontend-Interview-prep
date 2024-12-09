import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
function App() {
  const [show, setShow]=useState(false);
  const handleClose=()=>{
    setShow(false);
  }
  return (
    <div onClick={()=> setShow(false)}>
      <h1>Modal</h1>
      <button type="button" 
        onClick={(e)=>{
          e.stopPropagation()
          setShow(true)
        }}
      >Show the modal</button>
      {show? <Modal handleClose={handleClose}/>: null}
    </div>
  )
}

export default App

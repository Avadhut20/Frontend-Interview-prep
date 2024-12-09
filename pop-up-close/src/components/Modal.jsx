import React, { useEffect } from 'react'

const Modal = ({handleClose}) => {
    useEffect(()=>{
        function onKeyDown(event){
            if(event.keyCode === 27) handleClose()
        }
        document.addEventListener("keydown",onKeyDown);
        return()=>{
            document.removeEventListener("keydown",onKeyDown);
        }
    });
  return (
    <div id="modalbackdrop" className='modalbackdrop'>
        <div id='modalConten' className='modalContent'>
            <div id="modalHeader" className='modalHeader'>
                <span className='title'>Modal </span>
                <span className='button' onClick={handleClose}>X </span>
            </div>
            <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ea dolorem repellat, consectetur quisquam quo facilis aut animi iure vitae dolor officiis? Ad est iusto pariatur fugiat sunt ipsum ut eaque! Similique voluptatum ea temporibus reiciendis. Minus facilis velit veniam facere assumenda hic dicta!
            </span>

        </div>
    </div>
  )
}

export default Modal
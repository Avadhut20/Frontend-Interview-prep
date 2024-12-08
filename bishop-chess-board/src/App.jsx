import { useState } from 'react';
import './App.css'
function App() {
  const Board = Array(8).fill(null).map(() => Array(8).fill(''));
  console.log(Board)
  const [hoveredSquare,setHOverdSquare]=useState(null);
  const handleMouseEnter=(row,col)=>{
    setHOverdSquare([row,col])
  }
  const handleMouseLeave=(row,col)=>{
    setHOverdSquare([])
  }
  const getSquareColor=(row,col)=>{
    if(!hoveredSquare) return ''
    const [hoverRow,hoverCol]=hoveredSquare;
    if(row === hoverRow && col==hoverCol) return 'lightblue';
    if(Math.abs(hoverRow-row)===Math.abs(hoverCol-col)) return 'DarkBlue';

    return ''
  }
  return (
    <div className='chess'>
      {Board.map((row, rowIdx) =>
        row.map((_, colIndex) => {
          const isDark = (rowIdx + colIndex) % 2 === 1;
          return (
            <div key={`${rowIdx}-${colIndex}`}
              className={`square ${isDark ? 'Dark' : 'Light'}`}
              style={{
                backgroundColor:getSquareColor(rowIdx,colIndex)
              }}
              onMouseEnter={()=> handleMouseEnter(rowIdx,colIndex)}
              onMouseLeave={()=> handleMouseLeave(rowIdx,colIndex)}
            >

            </div>
          )
        })
      )}

    </div>
  )
}

export default App

import React from 'react'

const Board = ({size, board, handleClick}) => {
  return (
    <div className='board' style={{gridTemplateColumns: `repeat(${size}, 50px)`}}>
     {board?.map((row, rowIdx) => {
         return row?.map((cell, colIdx) => {
            return (
                <div className="cell" onClick={(() => handleClick(rowIdx, colIdx))}>
                    {cell}
                </div>
            )
         })
     })} 
    </div>
  )
}

export default Board

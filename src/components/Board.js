import React from 'react'
import './Board.css'

const Board = ({arr, onClick}) => {
  // console.log(arr)
  // ljkljdls
  return (
    <div className="board">
        <div className="box" onClick={() => onClick(0)}>{arr[0]}</div>
        <div className="box" onClick={() => onClick(1)}>{arr[1]}</div>
        <div className="box" onClick={() => onClick(2)}>{arr[2]}</div>
        <div className="box" onClick={() => onClick(3)}>{arr[3]}</div>
        <div className="box" onClick={() => onClick(4)}>{arr[4]}</div>
        <div className="box" onClick={() => onClick(5)}>{arr[5]}</div>
        <div className="box" onClick={() => onClick(6)}>{arr[6]}</div>
        <div className="box" onClick={() => onClick(7)}>{arr[7]}</div>
        <div className="box" onClick={() => onClick(8)}>{arr[8]}</div>
    </div>
  )
}

export default Board;

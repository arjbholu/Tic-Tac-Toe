import React from 'react'
import './Board.css'

const Board = ({arr, onClick}) => {
  // console.log(arr)
  return (
    <table>
      <tbody>
        <tr>
          <td align="center" onClick={() => onClick(0)}>{arr[0]}</td>
          <td align="center" onClick={() => onClick(1)}>{arr[1]}</td>
          <td align="center" onClick={() => onClick(2)}>{arr[2]}</td>
        </tr>
        <tr>
          <td align="center" onClick={() => onClick(3)}>{arr[3]}</td>
          <td align="center" onClick={() => onClick(4)}>{arr[4]}</td>
          <td align="center" onClick={() => onClick(5)}>{arr[5]}</td>
        </tr>
        <tr>
          <td align="center" onClick={() => onClick(6)}>{arr[6]}</td>
          <td align="center" onClick={() => onClick(7)}>{arr[7]}</td>
          <td align="center" onClick={() => onClick(8)}>{arr[8]}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Board;

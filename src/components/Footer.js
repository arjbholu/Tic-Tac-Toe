import React from 'react'

const Footer = ({completed, winner, reset}) => {
  return (
    <div className="footer">
      <button id="reset" onClick={() => reset()}>Reset</button>
      <div>{winner ? "The winner is " + winner: ''}
      </div>
    </div>
  )
}

export default Footer

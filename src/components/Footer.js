import React from 'react'

const Footer = ({completed, winner, reset}) => {
  return (
    <div className="footer">
      <div>
      {winner ? winner: ''}
      </div>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default Footer

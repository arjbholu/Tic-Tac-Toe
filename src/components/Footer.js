import React from 'react'

const Footer = ({completed, winner, reset}) => {
  return (
    <div>
      {winner}
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default Footer

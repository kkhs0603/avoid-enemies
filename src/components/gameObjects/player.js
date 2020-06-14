import React from 'react'

const Player = (playerX) => {
  const playerStyle = {
    height: '50px',
    width: '50px',
    backgroundColor: 'BLUE',
    position: 'absolute',
    top: '450px',
    left: playerX.position*50 + 'px'
  }
  return(
    <div style={playerStyle}>
      
    </div>
  )
}

export default Player
import React from 'react'

const Enemy = (enemyPosition) => {
  console.log(enemyPosition);
  const enemyStyle = {
    height: '50px',
    width: '50px',
    backgroundColor: 'RED',
    position: 'absolute',
    top: enemyPosition.positionY*50 + 'px',
    left: enemyPosition.positionX*50 + 'px'
  }
  return(
    <div style={enemyStyle}>
      
    </div>
  )
}

export default Enemy
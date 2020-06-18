import React, { useState, useEffect } from 'react'
import Player from './gameObjects/player'
import Enemy from './gameObjects/enemy'

const GameBoad = () => {

  const [playerX, setPlayerX] = useState(0);
  const [enemyX, setEnemyX] = useState(0);
  const [enemyY, setEnemyY] = useState(0);
  const keyHandler = ({ key }) => {
    //左
    if (key === 'a'){
      if(playerX >= 1){
        setPlayerX(playerX - 1);
      }
    }
    //右
    if(key === 'd'){
      if(playerX <= 8){
        setPlayerX(playerX + 1);
      }
    }
    window.removeEventListener('keydown', keyHandler);
  }

  let timer;
  //timer問題むずいなぁ、調べよう。
  const enemyMove = () => {
    
    if(enemyY <= 9){
      setEnemyY(enemyY + 1);
    }else{
      setEnemyY(0);
      var randomX = Math.floor( Math.random() * 10 );
      setEnemyX(randomX);
    }
    clearInterval(timer);

    //timerId何個も生成されているっぽい
    if(enemyY === 0){
      clearTimeout(timer);
    }
  }
  
  const startGame = () => {
    timer = setInterval(enemyMove, 1000);
    return timer
  }
  window.addEventListener('keydown', keyHandler);
  startGame()
  
  useEffect(() => { 
    return () => {
      
    }
  });
  const gameFrame = {
    height: '500px',
    width: '500px',
    border: 'solid 1px BLACK',
    margin:'0 auto',
    position: 'relative'
  };
  return(
    <div 
      style={gameFrame}
      tabIndex="0"
      >
        <button onClick={()=>{}}>START</button>
      <Player position={playerX}/>
      <Enemy positionX={enemyX} positionY={enemyY}/>
    </div>
  )
}


export default GameBoad
import { useState, useCallback } from 'react';
import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelpers'
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  })  

  rotate = (matrix) => {
    return mtrx = matrix.map((_, index) => matrix.map(column => column[matrix.length - index - 1]))
  }

  playerRotate = (stage) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player))
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino)
    if (!checkCollision(clonedPlayer, stage, {x: 0, y: 0})) {
      setPlayer(clonedPlayer)
    }
  }

  updatePlayer = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: prev.pos.x += x, y: prev.pos.y += y},
      collided,
    }))
  }

  resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH/2 - 2, y: 0},
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return [player, resetPlayer, updatePlayer, playerRotate]
}
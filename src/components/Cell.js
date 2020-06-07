import React from 'react';
import { View } from 'react-native';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
  <View 
    style={{
      width: 20,
      height: 20,
      backgroundColor: `rgba(${TETROMINOS[type].color}, 0.8)`,
      borderWidth: type === 0 ? 0 : 4,
      borderBottomColor: `rgba(${TETROMINOS[type].color}, 0.1)`,
      borderRightColor: `rgba(${TETROMINOS[type].color}, 1)`,
      borderTopColor: `rgba(${TETROMINOS[type].color}, 1)`,
      borderLeftColor: `rgba(${TETROMINOS[type].color}, 0.3)`,
    }}
  >
  </View>
)

export default React.memo(Cell);

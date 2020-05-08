import React from 'react';
import { View } from 'react-native';
import Cell from './Cell';

const Stage = ({ stage }) => (
  <View style={{ alignSelf: 'center', borderWidth: 0.5, borderColor: '#333333' }}>
    {stage.map((row, index) => {
      return (
        <View key={index} style={{flexDirection: 'row' }}>
          {row.map((cell, x) => {
            return (
              <Cell key={x} type={cell[0]} />
            )
          })}
        </View>
      )})}
  </View>
)

export default Stage;
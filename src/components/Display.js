import React from 'react';
import { View, Text } from 'react-native';

const Display = ({ gameOver, text }) => (
  <View 
    style={{
      backgroundColor: '#000',
      alignItems: 'center',
      padding: 20,
      borderWidth: 4,
      borderRadius: 20,
      borderColor: '#333',
    }}>
      <Text style={{ fontSize: 20, color: gameOver ? 'red' : '#999' }}>{text}</Text>
  </View>
)

export default Display
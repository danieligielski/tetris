/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
  StatusBar,
} from 'react-native';

import Tetris from './src/components/Tetris'

const App: () => React$Node = () => {
  return (
    <>
      <Tetris />
    </>
  );
};
export default App;
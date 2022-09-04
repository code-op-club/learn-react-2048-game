import './App.css';

import React, { useState, useEffect } from 'react';
import NumberSquareRow from './NumberSquareRow';

const INITIAL_NUMBERS = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

function App() {
  const [numbers, setNumbers] = useState(INITIAL_NUMBERS);

  const handleKeyPress = (e) => {
      console.log('key', e);
      console.log('numbers: ', numbers);
      const newNumbers = JSON.parse(JSON.stringify(numbers));

      // TASK 1 - comment out this example code
      for (var i = 0; i < 4; i+= 1) {
          for (var j = 0; j < 4; j+=1) {
              newNumbers[i][j] += 1;
          }
      }

      // TASK 2 - determine if an arrow key was pressed.

      // TASK 3 - Given the direction, combine the numbers
      // properly, so your game plays like https://play2048.co/
    
      // TASK 4 - stretch goal - display the current score.

      // TASK 5 - stretch goal - play around with App.css and
      // SquareValue.js to change the color of the text and the
      // box as the numbers increase.

      console.log('set numbers: ', newNumbers);
      setNumbers(newNumbers);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [numbers]);


  return (
    <div className="App" onKeyPress={handleKeyPress}>
      <NumberSquareRow numbers={numbers[0]}/>
      <NumberSquareRow numbers={numbers[1]}/>
      <NumberSquareRow numbers={numbers[2]}/>
      <NumberSquareRow numbers={numbers[3]}/>
    </div>
  );
}

export default App;

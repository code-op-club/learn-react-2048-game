import React from 'react';
import NumberSquare from './NumberSquare';

function NumberSquareRow(props) {
  const numbers = props.numbers;
  if (!Array.isArray(numbers) || numbers.length !== 4) {
    console.log("ERROR");
    return (
      <div> Coding Error </div>
    );
  }

  return (
    <div className="SquareValueRow">
      <NumberSquare squareValue={numbers[0]}/>
      <NumberSquare squareValue={numbers[1]}/>
      <NumberSquare squareValue={numbers[2]}/>
      <NumberSquare squareValue={numbers[3]}/>
    </div>
  );
}

export default NumberSquareRow

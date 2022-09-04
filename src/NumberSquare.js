import React from 'react';

function NumberSquare(props) {
  const number = props.squareValue || "";
  return (
    <div className="SquareValue">
        {String(number)}
    </div>
  );
}

export default NumberSquare

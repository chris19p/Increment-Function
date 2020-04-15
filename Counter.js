import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInputNumberChange, numberInputted, onInputNumber, }) => {

  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <input type="text" onchange={event => onInputNumberChange(event.target.value)} value={numberInputted} />
        <button onClick={onInputNumberChange}>Change Count</button>
      </div>
    </div>
  );
}


export default Counter;
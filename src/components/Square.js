import React from 'react';
import cssClasses from './Square.module.css';

const Square = ({ value, handleClick}) => {
  return (
    <div className={cssClasses.square}>
      <button onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Square;
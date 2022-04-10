import React from 'react';
import cssClasses from './Square.module.css';

const Square = ({ value, onClick}) => {

  // console.log(handleClick);
  return (
    <div className={cssClasses.square}>
      <button onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square;
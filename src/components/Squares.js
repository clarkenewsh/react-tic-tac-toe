import React from 'react';

const Squares = (props) => {
  return (
    <div>
      <button onClick={props.value}>{props.value}</button>
    </div>
  )
}

export default Squares;
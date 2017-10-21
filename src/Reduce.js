import React from 'react';

const Reduce = (props) => (
      <div>
        <p>Enter an array to reduce in the format: [num1, num2, num3, ...]</p>
        <form onSubmit={props.myReduce}>
          <input type='text' name='arrayToReduce'/>
          <button>Submit</button>
        </form>
        {props.reduceValue !== 0 &&
          <p>The reduced value from {props.reduceArray} is: {props.reduceValue}</p> }
      </div>
);

export default Reduce;

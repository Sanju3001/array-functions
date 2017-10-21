import React from 'react';

const Reduce = (props) => (
      <div>
        <p className="message">Reduce: Enter an array to reduce in the format: [num1, num2, num3, ...]</p>
        <form className="add-array" onSubmit={props.myReduce}>
          <input className="add-array__input" type='text' name='arrayToReduce'/>
          <button className="button">Submit</button>
        </form>
        {props.reduceValue !== 0 &&
          <p className="new-message">The reduced value from {props.reduceArray} is: {props.reduceValue}</p> }
      </div>
);

export default Reduce;

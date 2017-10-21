import React from 'react';

const FilterEven = (props) => (
      <div>
        <p>Enter an array to filter even numbers in the format: [num1, num2, num3, ...]</p>
        <form onSubmit={props.myFilterEven}>
          <input type='text' name='evenArray'/>
          <button>Submit</button>
        </form>
        {props.evenNumbers !== undefined &&
          <p>The even number(s) from {props.filterEvenArray} is/are {props.evenNumbers}</p> }
      </div>
);

export default FilterEven;
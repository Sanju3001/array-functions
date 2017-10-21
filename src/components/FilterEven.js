import React from 'react';

const FilterEven = (props) => (
      <div>
        <p className="message">Filter: Enter an array to filter even numbers in the format: [num1, num2, num3, ...]</p>
        <div className="container">
          <form className="add-array" onSubmit={props.myFilterEven}>
            <input className="add-array__input" type='text' name='evenArray'/>
            <button className="button">Submit</button>
          </form>
        </div>
        {props.evenNumbers !== undefined &&
          <p className="new-message">The even number(s) from {props.filterEvenArray} is/are {props.evenNumbers}</p> }
      </div>
);

export default FilterEven;
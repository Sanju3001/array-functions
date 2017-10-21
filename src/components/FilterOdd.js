import React from 'react';

const FilterOdd = (props) => (
      <div>
        <p className="message">Filter: Enter an array to filter odd numbers in the format: [num1, num2, num3, ...]</p>
        <form className="add-array" onSubmit={props.myFilterOdd}>
          <input className="add-array__input" type='text' name='oddArray'/>
          <button className="button">Submit</button>
        </form>
        {props.oddNumbers !== undefined &&
          <p className="new-message">The odd number(s) from {props.filterOddArray} is/are {props.oddNumbers}</p> }
      </div>
);

export default FilterOdd;
import React from 'react';

const FilterOdd = (props) => (
      <div>
        <p>Enter an array to filter odd numbers in the format: [num1, num2, num3, ...]</p>
        <form onSubmit={props.myFilterOdd}>
          <input type='text' name='oddArray'/>
          <button>Submit</button>
        </form>
        {props.oddNumbers !== undefined &&
          <p>The odd number(s) from {props.filterOddArray} is/are {props.oddNumbers}</p> }
      </div>
);

export default FilterOdd;
import React from 'react';

const Flatten = (props) => (
    <div>
      <p>Enter first and second arrays to flatten in the format: [num1, num2, num3, ...]</p>
      <form onSubmit={props.myFlatten}>
        <input type='text' name='firstFlatArray'/>
        <input type='text' name='secondFlatArray' />
        <button>Submit</button>
      </form>
      {props.flatArray !== undefined &&
        <p>The result of flattening {props.firstFlatArrayInput} and {props.secondFlatArrayInput} is: {props.flatArray}</p> }
    </div>
);

export default Flatten;
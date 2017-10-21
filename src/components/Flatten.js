import React from 'react';

const Flatten = (props) => (
    <div>
      <p className="message">Flatten: Enter first and second arrays to flatten in the format: [num1, num2, num3, ...]</p>
      <form className="add-array" onSubmit={props.myFlatten}>
        <input className="add-array__input" type='text' name='firstFlatArray'/>
        <input className="add-array__input" type='text' name='secondFlatArray' />
        <button className="button">Submit</button>
      </form>
      {props.flatArray !== undefined &&
        <p className="new-message">The result of flattening {props.firstFlatArrayInput} and {props.secondFlatArrayInput} is: {props.flatArray}</p> }
    </div>
);

export default Flatten;
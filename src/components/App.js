import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import FilterEven from './FilterEven';
import FilterOdd from './FilterOdd';
import Flatten from './Flatten';
import Reduce from './Reduce';


export default class App extends Component {
    state = {
      filterEvenArray: [],
      evenNumbers: undefined,
      filterOddArray: [],
      oddNumbers: undefined,
      reduceArray: [],
      reduceValue: 0,
      firstFlatArrayInput: [],
      secondFlatArrayInput: [],
      flatArray: undefined
    };

  myFilterEven = (e) => {
    e.preventDefault();

    const arrayToFilterEven = e.target.evenArray.value;
    const parsedEvenFilterArray = JSON.parse(arrayToFilterEven);

    let newEvenArr = [];

    for (let i = 0; i < parsedEvenFilterArray.length; i++) {
      if (parsedEvenFilterArray[i] % 2 === 0) {
        newEvenArr = newEvenArr.concat(parsedEvenFilterArray[i], ', ');
      }
    }

    newEvenArr.pop();

    this.setState(() => ({
      filterEvenArray: arrayToFilterEven,
      evenNumbers: newEvenArr
    }));

    e.target.evenArray.value = '';

  };

  myFilterOdd = (e) => {
    e.preventDefault();

    const arrayToFilterOdd = e.target.oddArray.value;
    const parsedOddFilterArray = JSON.parse(arrayToFilterOdd);

    let newOddArr = [];

    for (let i = 0; i < parsedOddFilterArray.length; i++) {
      if (parsedOddFilterArray[i] % 2 === 1) {
        newOddArr = newOddArr.concat(parsedOddFilterArray[i], ', ');
      }
    }

    newOddArr.pop();

    this.setState(() => ({
      filterOddArray: arrayToFilterOdd,
      oddNumbers: newOddArr
    }));

    e.target.oddArray.value = '';

  };

  myFlatten = (e) => {
    e.preventDefault();

    const firstArrayToFlatten = e.target.firstFlatArray.value;
    const parsedFirstFlatArray = JSON.parse(firstArrayToFlatten);
    const secondArrayToFlatten = e.target.secondFlatArray.value;
    const parsedSecondFlatArray = JSON.parse(secondArrayToFlatten);

    console.log(parsedFirstFlatArray);
    console.log(parsedSecondFlatArray);

    let newFlatArray = [];

    for (let i = 0; i < parsedFirstFlatArray.length; i++) {
      newFlatArray = newFlatArray.concat(parsedFirstFlatArray[i], ', ');
    }

    for (let j = 0; j < parsedSecondFlatArray.length; j++) {
      newFlatArray = newFlatArray.concat(parsedSecondFlatArray[j], ', ');
    }

    newFlatArray.pop();

    this.setState(() => ({
      firstFlatArrayInput: firstArrayToFlatten,
      secondFlatArrayInput: secondArrayToFlatten,
      flatArray: newFlatArray
    }));

    e.target.firstFlatArray.value = '';
    e.target.secondFlatArray.value = '';
  };

  myReduce = (e) => {
    e.preventDefault();

    const arrayToReduce = e.target.arrayToReduce.value;
    const parsedReduceArray = JSON.parse(arrayToReduce);

    let accumulator = 0;

    for (let i = 0; i < parsedReduceArray.length; i++) {
            accumulator += parsedReduceArray[i];
    }
    this.setState(() => ({
      reduceArray: arrayToReduce,
      reduceValue: accumulator
    }));

    e.target.arrayToReduce.value = '';
  };


  render() {
    return (
      <div>
        <Header subtitle={"Select a function to get started"} />
        <FilterEven
          myFilterEven={this.myFilterEven}
          filterEvenArray={this.state.filterEvenArray}
          evenNumbers={this.state.evenNumbers}
        />
        <FilterOdd
          myFilterOdd={this.myFilterOdd}
          filterOddArray={this.state.filterOddArray}
          oddNumbers={this.state.oddNumbers}
        />
        <Flatten
          myFlatten={this.myFlatten}
          firstFlatArrayInput={this.state.firstFlatArrayInput}
          secondFlatArrayInput={this.state.secondFlatArrayInput}
          flatArray={this.state.flatArray}
        />
        <Reduce
          myReduce={this.myReduce}
          reduceArray={this.state.reduceArray}
          reduceValue={this.state.reduceValue}
        />
      </div>
    );
  }
}


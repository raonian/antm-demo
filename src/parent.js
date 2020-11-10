import React, { useEffect, useRef, useState, useReducer } from 'react';
import './App.css';
import Child from './child';

const initialState = {
  value: 0,
  step: 1,
};

function reducer(state, action) {
  const { value, step } = state;
  if (action.type === 'value') {
    return { value: value + step, step };
  } else if (action.type === 'step') {
    return { value, step: action.payload };
  } else {
    throw new Error();
  }
}

export default function Parent() {
  const [value, setValue] = useState(0);
  // const ref = useRef(value);

  function count() {
    setTimeout(() => {
      console.log('value', value);
    }, 5000);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('value', value);
  //     // console.log('ref', ref.current);
  //   }, 5000);
  // });

  // useEffect(() => {
  //   let id = setInterval(() => {
  //     setValue(value + 1);
  //     // setValue(v => v + 1);
  //     console.log('value', value);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { value, step } = state;
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     dispatch({ type: 'value' });
  //     dispatch({ type: 'step', payload: 1 });
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);
  // console.log(value, step);
  
  // setTimeout(() => {
  //   console.log('value', value);
  // }, 5000);

  return (
    <div>
      <p>parent:</p>
      <button onClick={() => setValue(value + 1)}>value: {value}</button>
      {/* <button onClick={count}>show</button> */}
      <Child value={value} />
    </div>
  );
}

import React, { useEffect, useRef, useState, useReducer, useMemo, createContext } from 'react';
import './App.css';
import Child from './child';
import A from './a';
import B from './b';
import C from './c';

export const ParentContext = createContext({});

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
  // const [remove, setRemove] = useState(false);
  // const ref = useRef(value);

  // 捕获
  function count() {
    setTimeout(() => {
      console.log('value', value);
    }, 3000);
  }

  // 静态
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('value', value);
  //     // console.log('ref', ref.current);
  //   }, 3000);
  // });

  // 依赖
  // useEffect(() => {
  //   let id = setInterval(() => {
  //     setValue(value + 1);
  //     // setValue(v => v + 1);
  //     console.log('value', value);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  // 解耦
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
  
  // strict mode
  // setTimeout(() => {
  //   console.log('value', value);
  // }, 3000);

  // memo
  // const values = useMemo(() => ({v: 1}), [remove]);
  // const values = {v: 1};

  return (
    <ParentContext.Provider value={{value, setValue}}>
      <div>
        {/* <p>parent:{value}</p> */}
        parent: {value}
        <button onClick={() => setValue(value + 1)}>add</button>
        {/* <button onClick={count}>show</button> */}
        {/* {
          remove
            ?
            null
            :
            <Child value={value} values={values} />
        }
        <div><button onClick={() => setRemove(true)}>remove</button></div> */}

        <A />
        <B />
        <C />
      </div>
    </ParentContext.Provider>
  );
}

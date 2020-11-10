import React, {useCallback, useEffect, useState} from 'react';
import './App.css';

// function getData(value) {
//   setTimeout(() => {
//     console.log('props', value);
//   }, 3000);
// }

export default function Child(props) {
  const {value} = props;
  const [child, setChild] = useState(0);

  useEffect(() => {
    console.log('child', child);
    return () => {
      console.log('child destory');
    }
  }, [child]);

  // const getData = useCallback(() => {
  //   console.log('child', child, parent);
  // }, [value]);

  function getData() {
    setTimeout(() => {
      console.log('props', value);
    }, 3000);
  }
  
  // useEffect(() => {
  //   getData();
  //   // console.log('props', value);

  //   return () => {
  //     console.log('props destory');
  //   }
  // }, [getData]);


  useEffect(() => {
    let cancel = false;

    function getData() {
      setTimeout(() => {
        if(!cancel) {
          console.log('props', value);
        }
      }, 3000);
    }
    getData();

    return () => {
      cancel = true;
    }
  }, [value]);

  return (
    <div>
      <p>child</p>
      <button onClick={() => setChild(child + 1)}>child: {child}</button>
      <button onClick={getData}>getData</button>
      <p>props: {value}</p>
    </div>
  );
}

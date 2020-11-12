import React, {useCallback, useEffect, useState} from 'react';
import './App.css';

// 静态
// function getData(value) {
//   setTimeout(() => {
//     console.log('props', value);
//   }, 3000);
// }

export default function Child(props) {
  const {value, values} = props;
  const [child, setChild] = useState(0);

  // 销毁
  useEffect(() => {
    console.log('child init');

    return () => {
      console.log('child destory');
    }
  }, []);

  // 清理
  useEffect(() => {
    console.log('child', child);
    return () => {
      console.log('child update');
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
  
  // 函数参与数据流
  // useEffect(() => {
  //   getData();
  //   // console.log('props', value);

  //   return () => {
  //     console.log('props update');
  //   }
  // }, [getData]);

  // 竞态
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

  // memo
  // useEffect(() => {
  //   console.log('props values', values);
  // }, [values]);

  return (
    <div>
      <p>child</p>
      <button onClick={() => setChild(child + 1)}>child: {child}</button>
      <button onClick={getData}>getData</button>
      <p>props: {value}</p>
    </div>
  );
}

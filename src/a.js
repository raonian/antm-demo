import React, {useContext} from 'react';
import {ParentContext} from './parent';

export default function A() {
  const context = useContext(ParentContext);

  return (
    <div>
      a: {context.value}
      <button onClick={() => context.setValue(11)}>child-A</button>
    </div>
  );
}

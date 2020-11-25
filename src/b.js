import React, {useContext} from 'react';
import {ParentContext} from './parent';

export default function B() {
  const context = useContext(ParentContext);

  return (
    <div>
      b: {context.value}
      <button onClick={() => context.setValue(22)}>child-B</button>
    </div>
  );
}

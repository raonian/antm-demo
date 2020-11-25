import React, {useContext} from 'react';
import {ParentContext} from './parent';

export default function C() {
  const context = useContext(ParentContext);

  return (
    <div>
      c: {context.value}
    </div>
  );
}

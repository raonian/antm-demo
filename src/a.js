import React, {useCallback, useEffect, useState, useContext} from 'react';
import {ParentContext} from './parent';

export default function A(props) {
  const {value, values} = props;
  const context = useContext(ParentContext);

  return (
    <div>
      a:{context.value}
      <button onClick={() => context.setValue(11)}>A</button>
    </div>
  );
}

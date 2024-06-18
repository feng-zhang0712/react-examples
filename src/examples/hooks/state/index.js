import React, { useState } from 'react';

const counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={setCount(count++)}>+</button>
      <button onClick={setCount(count--)}>-</button>
    </div>
  );
};

export default counter;

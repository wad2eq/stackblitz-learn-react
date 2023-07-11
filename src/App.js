import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState(12);
  let d = 12;
  function incrementState() {
    d += 12;
    console.log(d);
    const start = data + 1;
    setData(start);
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>this is my state {data}</p>
      <button onClick={incrementState}>Update state by one</button>
    </div>
  );
}

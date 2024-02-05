import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function clickFunc() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={clickFunc} />
      <MyButton count={count} onClick={clickFunc} />
    </div>
  );
}

function MyButton({ count, func }) {
  return (
    <button onClick={func}>
      Clicked {count} times
    </button>
  );
}

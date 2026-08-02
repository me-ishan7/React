import { useState } from "react";
function App(){
  // let count = 0;
  // function Increment(){
  //   count++ 
  // }
  // let [count, setCount] = useState(0);

  const [count, setCount] = useState(0);

  function Increment(){
    // count++;
    // setCount(count);
    setCount(count + 1)
  }
  function Decrement(){
    // count--;
    // setCount(count);
    if(count > 0)
    setCount(count - 1)
  }

  return (
    <>
      <p>Counter : {count}</p>
      <button onClick = {Increment}>Increment {count}</button>
      <button onClick = {Decrement}>Decrement {count}</button>
    </>
  )
}
export default App;

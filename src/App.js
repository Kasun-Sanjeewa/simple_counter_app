import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <>
      <di className="container">
        <h1>My countter is: {count}</h1>

      </di>
      <div className="buttons">
        <button className="button" onClick={increment} >+</button>
        <button className="button" onClick={decrement}>-</button>
      </div>
    </>
  )

}

export default App;
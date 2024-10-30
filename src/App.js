import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <section className='ab'>
      <div className='card'>
        <div className="container">
          <h1>My counter is: {count}</h1>
        </div>
        <div id='cc' className="button-container">
          <button className="button" onClick={increment}>+</button>
          <button className="button" onClick={decrement}>-</button>
        </div>
      </div>
    </section>
  );
}

export default App;

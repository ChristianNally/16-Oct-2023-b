import {useState} from 'react';

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  // increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // decrement the counter
  const decrement = () => {
    setCounter(counter - 1);
  };

  // resets the counter
  const reset = () => {
    setCounter(initialValue);
  };

  // increment by N
  const incrementByN = (n) => {
    setCounter(counter + n);
  };

  // what do we return???
  // return [counter, increment, decrement, reset];
  return {
    counter,
    decrement,
    increment,
    incrementByN,
    reset,
  };
};

export default useCounter;

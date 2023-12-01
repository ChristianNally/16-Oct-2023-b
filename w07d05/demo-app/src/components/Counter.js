import useCounter from "../hooks/useCounter";

const Counter = () => {
  // const [count, increment, decrement, reset] = useCounter();
  const {
    counter, 
    reset, 
    decrement, 
    increment,
    incrementByN,
  } = useCounter(1000);

  return (
    <div>
      <h2>Counter Component</h2>

      <h2>Count: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => incrementByN(5)}>Plus 5</button>
      <button onClick={() => incrementByN(-5)}>Minus 5</button>
    </div>
  );
};

export default Counter;

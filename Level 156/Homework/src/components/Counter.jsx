const Counter = ({ count, increment }) => {
  return (
    <>
      <button onClick={increment}>Increase Count By One</button>
      <p>Count: {count}</p>
    </>
  );
};

export default Counter;
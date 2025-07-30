import { useCallback, useState } from "react";
import Counter from "./components/Counter";
import Greet from "./components/Greet";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <Counter count={count} increment={increment} />
      <Greet text={"Hello From React"} />
    </>
  );
}

export default App
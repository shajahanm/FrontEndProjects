import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }: { handleClick: () => void }) => {
  console.log("Button re-rendered");
  return <button onClick={handleClick}>Click me</button>;
});

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Memoized function with dependency
  const increment = useCallback(() => {
    setCount((prev) => prev + multiplier);
  }, [multiplier]); // Function updates when `multiplier` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setMultiplier((m) => m + 1)}>Increase Multiplier</button>
      <Button handleClick={increment} />
    </div>
  );
};

export default App;

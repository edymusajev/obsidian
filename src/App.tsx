import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-red-400">
        A rare working Electron + Vite + React template
      </h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {

  const [work, setWork] = useState('');

  return (
    <div className="App">
      <div className="flex h-screen gap-7 items-center border border-red-500 justify-center">
        <input
          type="text"
          className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
          value={work}
          onChange={e => setWork(e.target.value)}
        />
        <button
          type="button"
          className="outline-none px-6 py-2 bg-blue-500 rounded-md text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";

function App() {
  const [levelState, setLevelState] = useState(1);

  return (
    <div className="bg-black min-h-screen min-w-screen flex flex-col justify-center items-center text-white">
      <div className="relative bg-gray-400 p-2 rounded-md w-[300px] transition-all duration-300 mb-2">
        <div
          className={`absolute top-0 -left-1 m-1 h-[48px] w-[99px] bg-gray-500 rounded-md transform transition-transform duration-300 ${
            levelState === 1 ? "translate-x-0" : ""
          } ${levelState === 2 ? "translate-x-full" : ""} ${
            levelState === 3 ? "translate-x-[200%]" : ""
          }`}
        ></div>
        <div className="relative flex justify-between items-center">
          <button
            className={`px-4 py-2 rounded-md z-10`}
            onClick={() => setLevelState(1)}
          >
            Level 1
          </button>
          <button
            className={`px-4 py-2 rounded-md z-10`}
            onClick={() => setLevelState(2)}
          >
            Level 2
          </button>
          <button
            className={`px-4 py-2 rounded-md z-10`}
            onClick={() => setLevelState(3)}
          >
            Level 3
          </button>
        </div>
      </div>
      {levelState === 1 ? (
        <Level1 />
      ) : levelState === 2 ? (
        <Level2 />
      ) : (
        <Level3 />
      )}
    </div>
  );
}

export default App;

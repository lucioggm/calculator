import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  function handleClick(e) {
    const value = e.currentTarget.value;
    setInput(prevInput => prevInput + value);
  }

  function EqualButton() {
    return <button id="equals">=</button>;
  }

  function Display() {
    return <div id="display">{input}</div>;
  }

  function NumbersButtons() {
    const idButtons = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
    const names = ["seven", "eight", "nine", "four", "five", "six", "one", "two", "three", "zero", "decimal"];

    return (
        <div className="numbers-wrapper">
          {idButtons.map((key, index) => (
              <button key={index} id={names[index]} onClick={handleClick} value={key}>
                {key}
              </button>
          ))}
        </div>
    );
  }

  return (
      <div>
        <h1>Hola</h1>
        <Display />
        <NumbersButtons />
        <EqualButton />
      </div>
  );
}

export default App;

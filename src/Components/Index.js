import React, { useState } from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

export const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(10);
  const onSubmit = () => {};
  const HighlightTemplate = () => {
    return (
      <div>
        <p>
          <span
            style={{
              color: "green",
            }}
          >
            {inputValue?.slice(0, count)}
          </span>
          <span
            style={{
              color: "red",
            }}
          >
            {inputValue?.slice(count, inputValue?.length)}
          </span>
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <h2>React Exersice</h2>
        <textarea
          className="text-area"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="Enter Charactors"
          rows={5}
        />
        <HighlightTemplate />
        <button
          disabled={inputValue?.length > count}
          className="btn"
          onClick={onSubmit}
        >
          Submit
        </button>
        <div>
          <span>Charactor Count (%)</span>
          <br />
          <input
            onChange={(e) => setCount(e.target.value)}
            type="range"
            value={count}
          />
          <br />
          {count}
          {/* <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
        {count}
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button> */}
        </div>
      </div>
    </>
  );
};

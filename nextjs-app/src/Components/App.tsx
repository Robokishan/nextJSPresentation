/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import LongText from "./LongText";
import MockData from "./MockData";

function App(props: any) {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <div className="App">
        <div>
          <a href="https://nextjs.org/" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" className="logo" alt="Next logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>T3 + NextJs</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <MockData data={props.props.mockAddress} />
      <LongText />
    </div>
  );
}

export default App;

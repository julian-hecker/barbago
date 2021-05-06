import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState<any>(0);
  // https://www.twilio.com/blog/react-app-with-node-js-server-proxy
  useEffect(() => {
    function getData() {
      fetch('/api')
        .then(res => res.json())
        .then(res => { setData(res) })
        .catch(err => console.error(err));
    }
    getData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {data}
        </a>
      </header>
    </div>
  );
}

export default App;

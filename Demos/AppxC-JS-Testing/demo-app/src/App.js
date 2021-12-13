import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p id="mypara1">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          <button id="mybutton1" onClick={() => {
            let link = document.querySelector(".App-link")
            if (link) {
              link.innerHTML = "You gotta learn React dude"
            }
          }}>
            Click me
          </button>
        </p>

        <p>
          To run the tests, open a Terminal window and run: <b>npm run test</b>
        </p>

      </header>
    </div>
  );
}

export default App;

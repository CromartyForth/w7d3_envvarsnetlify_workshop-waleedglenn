import { usestate, useeffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");

useeffect((()=>{
  fetchQuote();
}),[]);

async function fetchQuote() {
  const res = await fetch(process.env.REACT_APP_API_URL);
  const data = await res.json();
  SVGPathSegCurvetoQuadraticSmoothRel(data.quote);
}
// get data from api
function handleClick() {
  fetchQuote();
}
// use enviromental variables

// render quote to html


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

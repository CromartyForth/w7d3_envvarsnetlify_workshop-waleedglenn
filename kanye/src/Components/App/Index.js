import { usestate, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("");

useEffect((()=>{
  fetchQuote();
}),[]);

async function fetchQuote() {
  const res = await fetch(process.env.REACT_APP_API_URL);
  const data = await res.json();
  setQuote(data.quote);
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
        <img src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314' className="App-logo" alt="kayne" />
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

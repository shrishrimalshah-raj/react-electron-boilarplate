import React from "react";
import logo from "./logo.svg";
import "./App.css";
const electron = window.require("electron");
const fs = window.require("fs");

function App() {
  console.log(`${__dirname}test.txt`);
  console.log(fs);
  // writeFile function with filename, content and callback function
  fs.writeFile("newfile.txt", "Learn Node FS module", function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });

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

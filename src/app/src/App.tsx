import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <MyComponent></MyComponent>
        <h1> Welcome to my app</h1>
        <p>Cada vez se hace mas complicado programar</p>
        <button>back to basics</button>
      </header>
    </div>
  );
}

export default App;

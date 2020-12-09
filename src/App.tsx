import React from 'react';
import Icon, { multiplication } from './components/common/icons';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Programs</h1>
        <ul className="thumbnails">
          <li>
            <h3>Day 1: Multiplier</h3>
            <Icon url={multiplication} />
          </li>
          <li>
            <h3>Day 2: Something Else </h3>
          </li>
          <li>
            <h3>Day 3: Another issue</h3>
          </li>
          <li>
            <h3>Day 4: wat</h3>
          </li>
          <li> 
            <h3>Day 5: hello there</h3>
          </li>

        </ul>
    </div>
  );
}

export default App;

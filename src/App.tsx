import React from 'react';
import logo from './logo.svg';
import './App.css';
import Drawer from "./modules/drawer";
import Body from './modules/body';

function App() {
  return (
    <div className="flex overflow-hidden">
        <Drawer />
        <Body />
    </div>
  );
}

export default App;

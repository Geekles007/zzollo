import React from 'react';
import {Provider} from 'mobx-react';
import './App.scss';
import HomePage from './modules/home-module';
import ThemeStore from './stores/ThemeStore';

function App() {
  return (
    <div className="App">
      <Provider ThemeStore={ThemeStore}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;

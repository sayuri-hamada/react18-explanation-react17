import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AutoBacthEventHandler } from './components/AutoBacthEventHandler';
import { AutoBatchOther } from './components/AutoBatchOther';

function App() {
  return (
    <div className="App">
      <AutoBacthEventHandler />
      <AutoBatchOther />
    </div>
  );
}

export default App;

// src/App.jsx

import React from 'react';
import './App.css';
import EquipmentFaultManagement from './views/EquipmentFaultManagement';
import RCAAnalysis from './views/RCAAnalysis';
import Dashboard from './views/Dashboard';
import FormViews from './views/FormViews';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EquipLog Application</h1>
      </header>
      <main>
        <EquipmentFaultManagement />
        <RCAAnalysis />
        <Dashboard />
        <FormViews />
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import { BookingWizard } from './components/BookingWizard';

function App() {
  return (
    <div className="App">
      <h1>Booking Wizard</h1>
      <div className="w3-container w3-teal">
        <h2>Input Form</h2>
      </div>
      <BookingWizard />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { MainArea } from './components/MainArea';
import { CounsellorAppointmentData } from './data/councellors';

function App() {
  const counsellorAppointmentData = new CounsellorAppointmentData()
  return (
    <div className="App">
      <MainArea counsellorAppointmentData={counsellorAppointmentData} />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainArea } from './components/MainArea';
import { TopHeader } from './components/TopHeader';
import { CounsellorAppointmentData } from './data/councellors';

function App() {
  const counsellorAppointmentData = new CounsellorAppointmentData()
  return (
    <div className="App main-wrapper">
      <MainArea counsellorAppointmentData={counsellorAppointmentData} />
    </div>
  );
}

export default App;

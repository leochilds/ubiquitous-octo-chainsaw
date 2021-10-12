import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MainArea } from './components/MainArea';
import { TopHeader } from './components/TopHeader';

function App() {
  return (
    <div className="App main-wrapper">
      <TopHeader />
      <Header />
      <MainArea />
      <Footer />
    </div>
  );
}

export default App;

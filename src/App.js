import React from 'react';
import Dashboard from './pages/Dashboard';
import './app.css';
import Header from './components/Header';
import axios from 'axios';





 axios.get("https://pokeapi.co/api/v2/pokemon?limit=50").then(response => console.log(response));


function App() {
  return (
    <>
    <Header/>
    <div className='App'>
      <Dashboard>
   
      </Dashboard>
    </div>
    </>
  );
}

export default App;
import React, { useState, useEffect, createContext } from 'react'
import './App.css';
import Wrapper from './components/Wrapper'

export const NavContext = createContext()

function App() {
  const [name, setName] = useState("John Doe")

  const handleTextChange = (e) => {
    setName(e.target.value)
  }
  
  const navContextValues = { name, setName, handleTextChange }

  return (
    <NavContext.Provider value={navContextValues}>
      <Wrapper/>
    </NavContext.Provider>
  );
}

export default App;

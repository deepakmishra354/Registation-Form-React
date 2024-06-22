import React, { useState, useRef, useContext, createContext } from 'react';
import User from './User';
import Memo from './Memo';
import Form from './Form'
import './App.css';

// Create Contexts
const NameContext = createContext();
const HobbyContext = createContext();

function App() {
  const name = "Deepak";
  const hobby = "Cricket";

  return (
    <>
      {/* <NameContext.Provider value={name}>
        <HobbyContext.Provider value={hobby}>
          <User />
        </HobbyContext.Provider>
      </NameContext.Provider> */}
      {/* <Memo/> */}
      <Form />
    </>
  );
}

// Export Contexts
export { NameContext, HobbyContext };
export default App;

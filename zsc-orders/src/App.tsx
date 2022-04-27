import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Inventory } from './Inventory';
import Layout from './Layout';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (<BrowserRouter><Layout></Layout></BrowserRouter>
    //     <div className="App">
    //       <header className="App-header">
    //         {/* <img src={logo} className="App-logo" alt="logo" /> */}
    // {/*         <p>
    //           Edit <code>src/App.tsx</code> and save to reload.
    //         </p> */}
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Click here for React help
    //         </a>
    //         <Inventory/>
    //       </header>

    //     </div>
  );
}

export default App;

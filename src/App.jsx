import React from 'react'
import Email from './components/Email';

import './App.css'


function App() {
 
  return (
    <React.Fragment>
      <nav>
        <h1>Filter By :</h1>
        <button>Unread</button>
        <button>Read</button>
        <button>Favorites</button>
      </nav>
      <section><Email/></section>
      
   
    </React.Fragment>
  );
}

export default App

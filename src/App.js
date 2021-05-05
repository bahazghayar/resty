import React from 'react';
import './App.scss';

import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';

function App (props){
    return ( 
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Main></Main>
     <Footer></Footer>
    </div>
  );
}

export default App;

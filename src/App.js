import React from 'react';
import { Helmet } from "react-helmet/es/Helmet";

import './App.css';
import './reset.css';
import Header from './components/Header/Header'
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import Tournois from './components/Tournois/Tournois'



function App() {
  return (
    <div className="App">

    <Helmet>
      <meta charSet="utf-8" />
      <title>Gamovic</title>
      <link rel="canonical" href="" />
      <meta name="keywords" content="Tournois, Jeux video, E-sport, Concours" />
      <meta content="Gamovic" itemProp="name" />
      <meta content="Gamovic est une plateforme de tournois dédié au jeux videos du moments avec récompense à la clef." itemProp="description" />
      <meta name="description" content="Gamovic est une plateforme de tournois dédié au jeux videos du moments avec récompense à la clef." />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Gamovic - Tournois de jeu" />
      <meta property="og:description" content="Gamovic est une plateforme de tournois dédié au jeux videos du moments avec récompense à la clef." />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="Gamovic" />
    </Helmet>
    
     <Header></Header>
     <Tournois></Tournois> 
     <Footer></Footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Header.scss';



export default function Header(props) {

 
  let openMenu = () => {
    let menu = document.getElementById('menu');
      menu.classList.toggle('open');
  }

  return (


   <div>
      <header>
      <div className="logo">
        Gamovic
      </div>
      <div className="menu" onClick={openMenu}>
        <div className="bloc-menu">
            <div className="line-menu"></div>
            <div className="line-menu second"></div>
            <div className="line-menu three"></div>
        </div>
      </div>

    </header>

    <div className="menu-open" id="menu">
      <ul>
        <li><a href="">Accueil</a></li>
        <li><a href="">Informations</a></li>
        <li><a href="">Nous contacter</a></li>
      </ul>
    </div>
   </div>


  )
}


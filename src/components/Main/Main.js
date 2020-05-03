import React from 'react';
import logo from '../../Asset/logo.png';
import fortnite from '../../Asset/fortnite.png';
import fifa from '../../Asset/fifa.png';
import arrow from '../../Asset/arrow.png';



import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div className="div_one">

                    <img src={logo} alt="Gamovic" />
                    <h1>Tournois multiple</h1>
                    <p>Des compétitions chaque jour sur les grands jeux du moment</p>
                    
                </div>

                <div className="div_two">

                    <div className="titre_tournois">
                        <div className="carré"></div>
                        <h1>Derniers tournois</h1>
                    </div>

                    <div className="div_jeu">
                        <img src={fortnite} alt="jeu" className="jeu" />
                        <h1>Fortnite</h1>
                        <p>200$</p>
                        <img src={arrow} alt="jeu" />
                    </div>

                    <div className="div_jeu">
                        <img src={fifa} alt="jeu" className="jeu" />
                        <h1>FIFA 20</h1>
                        <p>200$</p>
                        <img src={arrow} alt="jeu" />
                    </div>
                    
                </div>

                <div className="div_three">

                    <div className="ligne">
                        <div className="div_point">    
                            <div className="point"></div>
                            <div className="point"></div>
                            <div className="point"></div>
                        </div>              
                    </div>     

                    <div className="consigne">
                        <h1>Participez à un tournois</h1>
                        <h1>Atteignez le top 3</h1>
                        <h1>Remportez le prix</h1>
                    </div>
                </div>

                <div className="div_foor">

                <div className="titre_tournois">

                    <div className="carré"></div>
                        <h1>Rejoignez-nous !</h1>
                    </div>

                    <button className="button_inscription">S'INSCRIRE</button>

                </div>
            </main>
            
        );
    }
}
export default Main;
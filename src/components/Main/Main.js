import React from 'react';
import fortnite from '../../Asset/fortnite.png';
import fifa from '../../Asset/fifa.png';
import arrow from '../../Asset/arrow.png';

import './Main.scss';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 'Votre Email'
        };
    }
    

    render() {
        
        return (
            <main>
                
                    <div className="div_one">
                        <h1 className="logo">Gamovic</h1>
                        <h1>Tournois multiple</h1>
                        <p>Des compétitions chaque jour sur les grands jeux du moment</p>
                    </div>


                <div className="div_two">

                    <div className="titre_tournois">
                        <div className="carré"></div>
                        <h1>Derniers tournois</h1>
                    </div>

                <div className="lesjeux">
                    
                    <div className="div_jeu">
                        <img src={fortnite} alt="jeu" className="jeu" />
                        <h1>Fortnite</h1>
                        <p>200$</p>
                        <img src={arrow} alt="jeu" className="arrow" />
                    </div>

                    <div className="div_jeu">
                        <img src={fifa} alt="jeu" className="jeu" />
                        <h1>FIFA 20</h1>
                        <p>200$</p>
                        <img src={arrow} alt="jeu" className="arrow" />
                    </div>
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
                        <h1>Newsletter</h1>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder={this.state.value} className="input_text"/>
                    <input type="submit" value="S'abonner" className="input_submit" />
                    </form>
                </div>
            </main>
            
        );
    }
}
export default Main;
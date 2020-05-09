import React from 'react';
import './Tournois.scss';
import fifa from '../../Asset/fifa_grand.jpg';



class Tournois extends React.Component {

    render() {
        
        return (
            <div className="tournois">
                <h1>Tournois FIFA 20</h1> 
                <img src={fifa} alt="Jeu"/>

                <div className="participer">
                    <h1>Participer</h1>
                </div>
            </div>
            
        );
    }
}
export default Tournois;
import React from 'react';

import './Footer.scss';


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h1>Gamovic</h1>
            <div className="right-left">
                <div className="left">
                    <ul>
                        <li>Tournois</li>
                        <li>Nous contacter</li>
                        <li>Informations légales</li>
                    </ul>
                </div>

                <div className="right">
                    <ul>
                        <li>L'équipe</li>
                        <li>Réglements</li>
                        <li>Nous rejoindre</li>
                    </ul>
                </div>
            </div> 

                <div className="bottom">
                        <p>instagram</p>
                        <p>twitch</p>
                        <p>twitter</p>
                </div>
            </footer>
        );
    }
}
export default Footer;
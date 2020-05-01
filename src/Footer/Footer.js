import React from 'react';
import './Footer.scss';
import twitter from '../Asset/twitter.png'
import twitch from '../Asset/twitch.png'
import insta from '../Asset/insta.png'



class Footer extends React.Component {
    render() {
        return (
            <footer>
                    <ul>
                        <li>@Gamovic</li>
                        <li><a href="">Comment ça marche ?</a></li>
                        <li><a href="">Mentions légal</a></li>
                        <li><a href="">Nous contacter</a></li>
                    </ul>
                    <div className="div_logo">
                    <img src={twitter} alt="twitter" />
                    <img src={twitch} alt="twitter" />
                    <img src={insta} alt="twitter" />
                    </div>
            </footer>
        );
    }
}
export default Footer;
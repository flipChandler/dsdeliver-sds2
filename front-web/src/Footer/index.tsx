import { ReactComponent } from '*.svg';
import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. da Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/felipe-santos-b4b1a4124/">
                    <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/felip3.santos">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
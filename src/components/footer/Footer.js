import React from 'react';
import FadeIn from '../transitions/Fade-in';

const Footer = () => {
    return (
        <footer className="Footer">
            <FadeIn 
                delay={'1s'}
                direction={'top'}
                length={'20px'}
                duration={500}>
                <a href="https://github.com/gansuvd777/clickygame" target="_blank" rel="noopener noreferrer">Copyright &copy; created by Pearl Oyunbaatar 2019</a>
            </FadeIn>
        </footer>
    )
};

export default Footer;
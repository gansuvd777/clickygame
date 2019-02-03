import React from 'react';
import FadeIn from '../transitions/Fade-in';

const Header = () => { return(
    <header className="App-header">
        {/* <FadeIn in={true} duration={600} length={'30px'} direction={'bottom'}>
            <h2>Type something in here </h2>
        </FadeIn> */}
        <FadeIn in={true} duration={600} length={'50px'} direction={'bottom'} >
            <h1>The Most Popular Women in 2018</h1>
        </FadeIn>
    </header>
)};

export default Header;
import React, { Component } from 'react';
import FadeIn from '../transitions/Fade-in';
import CharacterBox from './CharacterBox';
import ScoreDisplay from './ScoreDisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Adele',
        img: 'img/adele.png',
        clicked: false
    },
    {
        name: 'Beyonce',
        img: 'img/beyonce.jpg',
        clicked: false
    },
    {
        name: 'Emma Watson',
        img: 'img/emma.jpg',
        clicked: false
    },
    {
        name: 'Ivanka Trump',
        img: 'img/ivanka.jpg',
        clicked: false
    },
    {
        name: 'Kim Kardashian',
        img: 'img/kim.jpg',
        clicked: false
    },
    {
        name: 'Lady Gaga',
        img: 'img/ladygaga.jpg',
        clicked: false
    },
    {
        name: 'Megan Markle',
        img: 'img/megan.jpg',
        clicked: false
    },
    {
        name: 'Naomi',
        img: 'img/naomi.jpg',
        clicked: false
    },
    {
        name: 'Oprah',
        img: 'img/oprah.jpg',
        clicked: false
    },
    {
        name: 'Rihanna',
        img: 'img/rihanna.jpg',
        clicked: false
    },
    {
        name: 'Sandra',
        img: 'img/sandra.jpg',
        clicked: false
    },
    {
        name: 'Selena Gomez',
        img: 'img/selena.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <p>Click once on each picture of the most popular women of 2018. Once you click a picture the grid will shuffle.<br/>Do Not click the same picture twice or the game will start all over!</p>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}
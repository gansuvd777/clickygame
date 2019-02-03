import React from 'react';
import Character from './Character';

const CharacterBox = (props) => {
    return(
        <div className="character-box">
            {props.characters.map( (character, index) => <Character character={character} index={index} onCharacterClick={props.onCharacterClick} key={character.name} />)}
        </div>
    )
};

export default CharacterBox;
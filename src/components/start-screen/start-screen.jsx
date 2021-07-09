import React from 'react';
import './start-screen.scss';
import useSound from "use-sound";
import click from '../../sounds/click.mp3';

const StartScreen = ({setActiveScreen}) => {

    const [play] = useSound(click)

    const startGame = () => {
        setActiveScreen('gameplay')
        play()
    }

    return (
        <div className='start-screen'>
            <img onClick={() => startGame()} className='start-screen__background' src='/assets/g1.jpg'
                 alt="start-background"/>
        </div>
    )
}

export default StartScreen;
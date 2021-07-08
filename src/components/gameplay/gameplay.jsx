import React, {useState} from "react";
import './gameplay.scss'
import gameplayBackground from '../../assetes/g4.jpg'
import umbrellaOne from '../../assetes/zont1.png'
import umbrellaTwo from '../../assetes/zont2.png'
import umbrellaThree from '../../assetes/zont3.png'
import umbrellaFour from '../../assetes/zont4.png'
import umbrellaFive from '../../assetes/zont5.png'
import continueButton from '../../assetes/knopka.png'
import useSound from "use-sound";
import click from "../../sounds/click.mp3";

const Gameplay = () => {

    const [score, setScore] = useState(0);
    const [foundUmbrellaSound] = useSound(click)


    const addScore = (element) => {
        setScore(score + 1)
        element.classList.add('delete')
        foundUmbrellaSound()
    }

    const viewButton = () => {
        if (score === 3) {
            return 'viewButton'
        }
    }
    return (
        <div className='gameplay'>
            <img className='gameplay__background' src={gameplayBackground} alt="gameplay"/>
            <div className="gameplay__counter">{score}/5</div>
            <img onClick={(e) => addScore(e.target)} className='gameplay__umbrella-one'
                 src={umbrellaOne} alt="umbrella-one"/>
            <img onClick={(e) => addScore(e.target)} className='gameplay__umbrella-two'
                 src={umbrellaTwo} alt="umbrella-two"/>
            <img onClick={(e) => addScore(e.target)} className='gameplay__umbrella-three'
                 src={umbrellaThree} alt="umbrella-three"/>
            <img onClick={(e) => addScore(e.target)} className='gameplay__umbrella-four'
                 src={umbrellaFour} alt="umbrella-four"/>
            <img onClick={(e) => addScore(e.target)} className='gameplay__umbrella-five'
                 src={umbrellaFive} alt="umbrella-five"/>
            <img className={'gameplay__button ' + viewButton()} src={continueButton} alt='continue-button'/>
        </div>
    )
}

export default Gameplay;
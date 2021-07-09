import React, {useState} from "react";
import './gameplay.scss';
import continueButton from '../../assets/knopka.png';
import useSound from "use-sound";
import click from "../../sounds/click.mp3";

const Gameplay = ({config}) => {

    const [score, setScore] = useState(0);

    const [foundObjectSound] = useSound(click);

    const allObjects = config.objects;

    const addScore = (element) => {
        setScore(score + 1);
        element.classList.add('found-object');
        foundObjectSound();
    }

    const viewButton = () => {
        if (score >= config.minFoundObjects) {
            return 'continue-button';
        }
    }

    const mapAllObjects = () => {
        return allObjects.map(u => <img onClick={(e) => addScore(e.target)}
                                   className='gameplay__object'
                                   src={u.url}
                                   alt='object-icon'
                                   style={{top: u.top + 'px', left: u.left + 'px', width: u.width + 'px', height: u.height + 'px'}}/>)
    }
    return (
        <div className='gameplay'>
            <img className='gameplay__background' src={config.background} alt="gameplay"/>
            <div className="gameplay__counter">{score}/{config.objects.length}</div>
            {
                mapAllObjects()
            }
            <img className={'gameplay__button ' + viewButton()} src={continueButton} alt='continue-button'/>
        </div>
    )
}

export default Gameplay;
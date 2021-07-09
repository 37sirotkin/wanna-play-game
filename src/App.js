import './App.css';
import StartScreen from "./components/start-screen/start-screen";
import {useState} from "react";
import Gameplay from "./components/gameplay/gameplay";
import config from './level-config/level1.json';

function App() {

    const [activeScreen, setActiveScreen] = useState('start');
    const viewScreen = () => {
        switch (activeScreen) {
            case 'start':
                return <StartScreen setActiveScreen={setActiveScreen}/>
            case 'gameplay':
                return <Gameplay setActiveScreen={setActiveScreen} config={config}/>
        }
    }
    return (
        <div className="App">
            {viewScreen()}
        </div>
    );
}

export default App;

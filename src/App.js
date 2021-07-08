import './App.css';
import StartScreen from "./components/start-screen/start-screen";
import {useState} from "react";
import Gameplay from "./components/gameplay/gameplay";

function App() {

    const [activeScreen, setActiveScreen] = useState('start');

    const viewScreen = () => {
        switch (activeScreen) {
            case 'start':
                return <StartScreen setActiveScreen={setActiveScreen}/>
            case 'gameplay':
                return <Gameplay/>
        }
    }
  return (
    <div className="App">
        {viewScreen()}
    </div>
  );
}

export default App;

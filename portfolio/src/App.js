import './App.css';
import Navbar from './Navbar';
import astronaut from './Assets/astronaut.png'
import satellite from './Assets/satellite.png'
import Intro from './Intro';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <div class="space stars1"></div>
        <div class="space stars2"></div>
        <div class="space stars3"></div>
        <img id='astronaut' src={astronaut} alt={astronaut}/>
        <img id='satellite' src={satellite} alt={satellite}/>
        <Intro/>
    </div>
  );
}

export default App;

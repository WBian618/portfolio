import './App.css';
import Navbar from './Navbar';
import astronaut from './Assets/astronaut.png'

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
    </div>
  );
}

export default App;

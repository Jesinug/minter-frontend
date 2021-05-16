import logo from './logo1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Minter
        </h1>
        <a className="Quote">
          "We are all ignorants, but we all ignore different things"
          <br></br>
          <em>Albert Einstein</em>
        </a>
      </header>
    </div>
  );
}

export default App;

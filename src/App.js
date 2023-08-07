import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test Msg</p>
        <p>MESSAGE: {window._env_.MESSAGE}</p>
      </header>
    </div>
  );
}

export default App;

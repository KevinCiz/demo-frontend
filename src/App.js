import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Add new paragraph</p>
        <p>MESSAGE: {window._env_.MESSAGE}</p>
      </header>
    </div>
  );
}

export default App;

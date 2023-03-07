import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="input-nome-personagem">
        Digite o nome completo do personagem
        <input
        type="text"
        id="input-nome-personagem"
        placeholder="Tyrion Lannister"
        />
      </label>
      
      
    </div>
  );
}

export default App;

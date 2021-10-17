import logo from './logo.svg';
import './App.css';
import Componente from './Classe/Componentes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
     <h1>Olá mundo React!</h1>
   <Componente/>
        </p>

      </header>
    </div>
  );
}

export default App;

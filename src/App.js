import './App.css';
import ListCards from './components/cards/ListCards';
import Navbar from './components/navbar/navbar'
function App() {
  return (
    <div className="App">
     <h1>Mi primera aplicacion en react</h1>
     <Navbar/>
     <ListCards/>
    </div>
  );
}

export default App;

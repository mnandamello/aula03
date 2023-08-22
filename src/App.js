import './App.css';
import Header from './components/header/Header';
import Corpo from './components/corpo/Corpo';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Corpo/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

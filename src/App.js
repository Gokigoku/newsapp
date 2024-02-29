import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar />
    
    <div className='container'>
        <News />
      </div>
    </div>

  );
}

export default App;

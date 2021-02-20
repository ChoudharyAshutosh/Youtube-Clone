import logo from './logo.svg';
import './App.css';
import SearchBar from './Component/SearchBar';
import RelatedList from './Component/RelatedList';
import Player from './Component/Player';
function App() {
  return (
    <div className="App">
      <SearchBar/>
      <div className='content'>
          <div className='searched'>
              <Player/>
          </div>
          <div className='recommended'>
              <RelatedList/>
          </div>
      </div>
    </div>
  );
}

export default App;

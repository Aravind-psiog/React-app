import logo from './logo.svg';
import './App.css';
import BaseTemplate from './components/Header/Header';  
import MovieTemplate from './components/MovieCard/MovieCard';
import StaticData from './components/MovieCard/StaticData';

function App() {
  return (
    <div className="App">
      <BaseTemplate></BaseTemplate>
      <section class="hero-section">
      <div class="card-grid">

        
        {StaticData.map((movie)=>(
          <MovieTemplate movies={movie}></MovieTemplate>
        ))}

        </div>
      </section>
      
    </div>
  );
}

export default App;

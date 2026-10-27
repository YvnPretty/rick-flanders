import { useEffect, useState } from 'react';
import Img from './components/img.jsx';

function App() {
  const [personajes, setPersonajes] = useState([]);

  // Fetch Rick y Morty characters
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(r => r.json())
      .then(data => setPersonajes(data.results))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="min-vh-100 py-5 px-3 text-center">
      <div className="container">
        <header className="mb-5">
          <p className="portal-label">EXPLORADOR MULTIVERSAL</p>
          <h1>Rick & Morty</h1>
          <p>Un portal, infinitos personajes.</p>
        </header>
        <div className="row g-3 justify-content-center">
          {personajes.map(p => (
            <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
              <Img
                nombre={p.name}
                imagen={p.image}
                especie={p.species}
                genero={p.gender}
                id={p.id}
                estado={p.status}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

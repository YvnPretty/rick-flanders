import { useEffect, useState } from 'react';
import Img from './components/img.jsx';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const filtrados = personajes.filter(p => p.name.toLowerCase().includes(busqueda.trim().toLowerCase()));

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
        <div className="buscador mx-auto mb-4 text-start">
          <label htmlFor="buscar" className="form-label">Buscar entre los personajes cargados</label>
          <input id="buscar" type="search" className="form-control" placeholder="Escribe un nombre, por ejemplo Rick" value={busqueda} onChange={e => setBusqueda(e.target.value)} />
          {busqueda.trim() && <p className="small mt-2" role="status">{filtrados.length ? `${filtrados.length} personajes encontrados` : 'No hay personajes con ese nombre.'}</p>}
        </div>
        <div className="row g-3 justify-content-center">
          {filtrados.map(p => (
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

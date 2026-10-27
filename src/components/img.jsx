const Img = ({ nombre, imagen, especie, genero, id, estado }) => (
  <article className="personaje h-100 text-start">
    <img src={imagen} alt={nombre} loading="lazy" />
    <div className="p-3">
      <p className="small mb-2">#{id} · {estado}</p>
      <h2 className="h5 fw-bold">{nombre}</h2>
      <p className="small mb-0">specie: {especie} · gender: {genero}</p>
    </div>
  </article>
);

export default Img;

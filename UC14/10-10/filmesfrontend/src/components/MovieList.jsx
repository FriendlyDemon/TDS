import "./movieList.css";

export default function MovieList({ movies, onDelete }) {
  if (!movies || movies.length === 0) return <p>Nenhum filme cadastrado 😅</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {movies.map((m) => (
        <li className="movie_list" key={m.id}>
          {m.image && (
            <img className="movie_image" src={m.image} alt={m.title} />
          )}
          <div>
            <strong>{m.title}</strong> ({m.year})
          </div>
          <button className="delete" onClick={() => onDelete(m.id)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

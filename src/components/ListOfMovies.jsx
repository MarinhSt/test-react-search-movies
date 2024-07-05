export function ListOfMovies({ movies = [] }) {
    return (
        <>
            {movies.map(movie => (
                <li
                    key={movie.imdbID}
                    style={{
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 0 5px 0 #ccc',
                    }}
                >
                    <h4>{movie.Title}</h4>
                    <p>{movie.Year}</p>
                    <img
                        src={movie.Poster}
                        alt={`poster of movie ${movie.Title}`}
                    />
                </li>
            ))}
        </>
    )
}

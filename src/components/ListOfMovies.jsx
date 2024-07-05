export function ListOfMovies({ movies = [] }) {
    return (
        <>
            {movies.map(movie => (
                <li
                    key={movie.id}
                    style={{
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 0 5px 0 #ccc',
                    }}
                >
                    <h4>{movie.title}</h4>
                    <p>{movie.year}</p>
                    <img
                        src={movie.poster}
                        alt={`poster of movie ${movie.title}`}
                    />
                </li>
            ))}
        </>
    )
}

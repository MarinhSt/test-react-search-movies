import { ListOfMovies } from './ListOfMovies'
import { SearchError } from './SearchError'

export function ShowMovies({ defaultMovies, movies, loding, errorSearchMovie }) {

    return (
        <>
            {!loding && !movies && !errorSearchMovie && (
                <ListOfMovies movies={defaultMovies} />
            )}
            {!loding &&
                (errorSearchMovie ? (
                    <SearchError errorMessage={errorSearchMovie} />
                ) : (
                    <ListOfMovies movies={movies} />
                ))}
        </>
    )
}
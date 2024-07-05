export function adapted(data) {
    return data.Search.map(movie => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }
    })
}
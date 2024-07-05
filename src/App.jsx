import { useState } from 'react'
import './App.css'

const API_KEY = '9c3d6939'
function App() {
    const [searchBox, setSearch] = useState('')
    const [movies, setMovies] = useState()

    const getMovies = async search => {
        const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${search}`

        fetch(API_ENDPOINT)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setMovies(data.Search)
            })
            .catch(err => console.error(err))
    }

    const handelSearch = e => {
        e.preventDefault()
        getMovies(searchBox)
    }
    return (
        <>
            <header>
                <h1>Movie Search</h1>
                <form onSubmit={handelSearch} className="searchbox">
                    <input
                        type="text"
                        onChange={({ target }) => setSearch(target.value)}
                        value={searchBox}
                        placeholder="fast and furious, star wars ..."
                    />
                    <button type="submit">
                        <i className="  material-icons">search</i>
                    </button>
                </form>
            </header>
            <main>
                <ul>
                    {movies?.map(movie => (
                        <li key={movie.imdbID}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}

export default App

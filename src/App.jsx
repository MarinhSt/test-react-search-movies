import { useState } from 'react'
import './App.css'
import mock from './mock/movies-mock.json'
import { ListOfMovies } from './components/ListOfMovies'

const API_KEY = '9c3d6939'
function App() {
    const [searchBox, setSearch] = useState('')
    const [movies, setMovies] = useState()

    const getMovies = async search => {
        const API_URL_ENDPOINT_MOVIE_LIST = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${search}`

        fetch(API_URL_ENDPOINT_MOVIE_LIST)
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
            <header
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1>Movie Search</h1>
                <form
                    onSubmit={handelSearch}
                    className="searchbox"
                    style={{ display: 'flex' }}
                >
                    <input
                        type="text"
                        onChange={({ target }) => setSearch(target.value)}
                        value={searchBox}
                        placeholder="fast and furious, star wars ..."
                        style={{
                            height: '40px',
                            width: '200px',
                            margin: '0',
                            borderRadius: '25px 0px 0px 25px',
                            border: 'none',
                            boxSizing: 'border-box',
                            paddingLeft: '15px',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            height: '40px',
                            width: '60px',
                            padding: '0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '0px 30px 30px 0px',
                        }}
                    >
                        <i className="  material-icons">search</i>
                    </button>
                </form>
            </header>
            <main>
                <ul
                    style={{
                        listStyle: 'none',
                        width: '89%',
                        margin: '30px auto',
                        padding: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '10px',
                    }}
                >
                    {!movies ? (
                        <ListOfMovies movies={mock} />
                    ) : (
                        <ListOfMovies movies={movies} />
                    )}
                </ul>
            </main>
        </>
    )
}

export default App

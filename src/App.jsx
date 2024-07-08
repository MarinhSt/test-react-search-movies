import { useState } from 'react'
import './App.css'
import { useMovies } from './hooks/useMovies'
import { ShowMovies } from './components/ShowMovies'

function App() {
    const [searchBox, setSearch] = useState('')
    const {
        defaultMovies,
        movies,
        loding,
        errorSearchMovie,
        getMovies,
        cleanToSearch,
    } = useMovies(searchBox)

    const handelSearch = e => {
        e.preventDefault()
        getMovies(searchBox)
        cleanToSearch()
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
                        required
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
                    <ShowMovies
                        defaultMovies={defaultMovies}
                        movies={movies}
                        loding={loding}
                        errorSearchMovie={errorSearchMovie}
                    />
                </ul>
            </main>
        </>
    )
}

export default App

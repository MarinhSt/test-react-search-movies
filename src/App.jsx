import { useState } from 'react'
import './App.css'

function App() {
    const [searchBox, setSearch] = useState('')

    const handelSearch = e => {
        e.preventDefault()
        console.log(searchBox)
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
                <p>here we will display our movie list</p>
            </main>
        </>
    )
}

export default App

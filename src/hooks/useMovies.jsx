import { useState } from "react"
import { adaptedMovies } from "../adapters/adapted-movies"
import mock from '../mock/movies-mock.json'


const API_KEY = '9c3d6939'

export function useMovies() {
    const [movies, setMovies] = useState()
    const [loding, setLoading] = useState(false)
    const [errorSearchMovie, setErrorSearchMovie] = useState(null)

    const defaultMovies = adaptedMovies(mock)
    
    const cleanToSearch = () =>{
        setLoading(true)
        setErrorSearchMovie(null)
    }

    const getMovies = async search => {
        const API_URL_ENDPOINT_MOVIE_LIST = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=${search}`

        fetch(API_URL_ENDPOINT_MOVIE_LIST)
            .then(res => res.json())
            .then(data => {
                if (data.Error) {
                    setErrorSearchMovie(
                        `Error: ${data.Error}. Try with another search.`
                    )
                    setMovies(null)
                    setLoading(false)

                    throw new Error(data.Error)
                }
                setMovies(() => adaptedMovies(data))
                setLoading(false)
            })
            .catch(err => console.error(err))
    }
    return { defaultMovies, movies, loding, errorSearchMovie, getMovies, cleanToSearch}
}
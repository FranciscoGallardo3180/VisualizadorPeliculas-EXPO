import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie, MovieDBNowResponse } from "../interfaces/movieInterface"

interface MovieStates {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {

    //Obtener peliculas en cartelera con hooks useState
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MovieStates>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })


    //obtener peliculas
    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBNowResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBNowResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBNowResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBNowResponse>('/upcoming');

        const res = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

        //establecer respuesta
        setMoviesState({
            nowPlaying: res[0].data.results,
            popular:res[1].data.results,
            topRated:res[2].data.results,
            upcoming:res[3].data.results,
        })
        setIsLoading(false);
    }

    useEffect(() => {
        //peliculas en reproduccion
        getMovies();
    }, [])




    return {
        ...moviesState,
        isLoading
    }
}

export default useMovies
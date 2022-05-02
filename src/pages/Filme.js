import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import App from "../App";

function Filme() {
    const location = useLocation();
    const id = location.state.id
    const [d, setData] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });
 

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR`;

        const fetchSearch = async () => {
            const { data } = await axios.get(url);

            setData(data)

        };
        fetchSearch();

    }, []);

    return (

        <>
        <App />
        <div >{d.title}<img className="movie--img" src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt={d.original_title} /><img className="movie--img" src={`https://image.tmdb.org/t/p/w500${d.backdrop_path}`} alt={d.original_title} /></div>

        </>

    )
}

export default Filme;
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

            <div className="movie--" >
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="img-fluid rounded-start" src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt={d.original_title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{d.title}</h5>
                                    <p className="card-text">{d.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

        </>

    )
}

export default Filme;
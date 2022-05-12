import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import App from "../App";
import Video from "./Video";

function Filme() {
    const location = useLocation();
    const id = location.state.id
    const name = location.state.title + " trailer"

    const [link, setLink] = useState(undefined)
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
        start();

    }, []);

    async function start() {
        try {
            // 3. Make the API request.
            return window.gapi.client.youtube.search.list({
                "part": [
                    "snippet"
                ],
                "q": name
            })
                .then(function (response) {
                    // Handle the results here (response.result has the parsed body)
                    const { result } = response

                    setLink(`https://www.youtube.com/embed/${result.items[0].id.videoId}`)


                },
                    function (err) { console.error("Execute error", err); });

        } catch (e) {
            console.error(e);
        }
    }


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
                                <Video link={link} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Filme;
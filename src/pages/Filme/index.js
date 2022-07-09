import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from "./styles"
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import App from "../../App";

const Filme2 = () => {
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
            <C.Container>
                <LeftMenu />

                <div className="content">
                <img src={`https://image.tmdb.org/t/p/w1280${d.backdrop_path}`} alt={d.original_title} />
                <h5 className="card-title">{d.title}</h5>
                <p className="card-text">{d.overview}</p>
                </div>

                <LeftMenu />
            </C.Container>
            <Footer />
        </>

    )
}

export default Filme2;
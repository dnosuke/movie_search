import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from "./styles"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Video from "../../components/Video";
import SimilarMovie from "../../components/SimilarMovie";

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
    const [similar, setSimilar] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });
    console.log(d);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR`;

        const url2 = `https://api.themoviedb.org/3/movie/${id}/similar?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&page=1`;

        const fetchSearch = async () => {
            const { data } = await axios.get(url);

            setData(data)
        };
        const fetchSearch2 = async () => {
            const { data } = await axios.get(url2);

            setSimilar(data)
        };



        fetchSearch();
        fetchSearch2();
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
            <Navbar />
            <C.Container>

                        
                <div className="content">
                    <img src={`https://image.tmdb.org/t/p/w1280${d.backdrop_path}`} alt={d.original_title} />
                    <div className="degrade"></div>
                    <div className="card-title">
                        <h1>{d.title}</h1>
                        <div className="evaluation">
                            <i class="uil uil-star"></i>
                            <p >{parseFloat(d.vote_average).toFixed(1)}</p>
                        </div>
                    
                    </div>

                    <div className="details">
                        <p className="date">Data de lançamento: {d.release_date}</p>
                        <p className="date">Duração: {d.runtime}min</p>
                        <p className="date">Orçamento {d.budget}</p>

                    </div>
                    <p >{d.overview}</p>
                    <Video link={link} />
                </div>

                <SimilarMovie data={similar} title={'Similar'} />
            </C.Container>
            <Footer />
        </>

    )
}

export default Filme2;
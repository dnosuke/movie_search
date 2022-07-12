import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from "./styles"
import Footer from "../../components/Footer";
import LeftMenu from "../../components/LeftMenu";
import Navbar from "../../components/Navbar";
import Video from "../../components/Video";
import RightMenu from "../../components/RightMenu";

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
                <LeftMenu />

                <div className="content">
                    <img src={`https://image.tmdb.org/t/p/w1280${d.backdrop_path}`} alt={d.original_title} />
                    <div className="degrade"></div>
                    <h1 className="card-title">{d.title}</h1>

                    <div className="details">
                        <p className="date">RELEASE {d.release_date}</p>

                        <div className="evaluation">
                            <i class="uil uil-star"></i>
                            <p >{d.vote_average}</p>
                        </div>
                    </div>
                    <p >{d.overview}</p>
                    <Video link={link} />
                </div>

                <RightMenu data={similar} title={'Similar'} />
            </C.Container>
            <Footer />
        </>

    )
}

export default Filme2;
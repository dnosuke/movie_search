import { useEffect, useState } from "react";
import App from "../App";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './movie.css';

//https://api.themoviedb.org/3/movie/top_rated?&api_key=13d2c66212887a5ce321622117f2180a&language=pt-BR&page=1
const REACT_APP_TOKEN = '13d2c66212887a5ce321622117f2180a'
function TopRated() {

    let navigate = useNavigate();
    const [d, setData] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });
    const [d2, setData2] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });


    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?&api_key=${REACT_APP_TOKEN}&language=pt-BR&page=1`;

        const url2 = `https://api.themoviedb.org/3/movie/upcoming?&api_key=${REACT_APP_TOKEN}&language=pt-BR`;

        const fetchSearch = async () => {
            const { data } = await axios.get(url);

            setData(data)

        };
        fetchSearch();

        const fetchSearch2 = async () => {
            const { data } = await axios.get(url2);

            setData2(data)

        };
        fetchSearch2();

    }, []);


    return (
        <>
            <App />
            <div className="top--movie">

                <h1>Top Rated</h1>
                {d.results.map((item, key) =>
                    <div key={key} className="movie">


                        <div key={key} className="row">

                            <div >

                                <a onClick={() => {
                                    navigate("/filme", { state: { id: item.id } })
                                }}>

                                    <div className="align-middle">
                                        <div className="img-fluid"><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                                        </div>
                                    </div>
                                </a>
                                <div className="text--area">

                                    <div className="card-title">

                                        Nota: {item.vote_average}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>



                )}
            </div>

            <div className="top--movie">

                <h1>Upcoming</h1>
                {d2.results.map((item, key) =>
                    <div key={key} className="movie">


                        <div key={key} className="row">

                            <div >

                                <a onClick={() => {
                                    navigate("/filme", { state: { id: item.id } })
                                }}>

                                    <div className="align-middle">
                                        <div className="img-fluid"><img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                                        </div>
                                    </div>
                                </a>
                                <div className="text--area">

                                    <div className="card-title">

                                        Nota: {item.vote_average}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>



                )}
            </div>
        </>
    )
}

export default TopRated;
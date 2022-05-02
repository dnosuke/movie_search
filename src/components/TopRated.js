import { useEffect, useState } from "react";
import App from "../App";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './movie.css';


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
    const [scrollX, setScrollX] = useState(0);
    const [scrollX_2, setScrollX_2] = useState(0);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&page=1`;

        const url2 = `https://api.themoviedb.org/3/movie/upcoming?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR`;

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

    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0
        }
        setScrollX(x);
    }
    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let list = d.results.length * 190;
        if((window.innerWidth - list) > x){
            x = (window.innerWidth - list) -90;
        }
        setScrollX(x);
    }

    const handleLeft2 = () => {
        let x2 = scrollX_2 + Math.round(window.innerWidth / 2);
        if(x2 > 0) {
            x2 = 0
        }
        setScrollX_2(x2);
    }
    const handleRight2 = () => {
        let x2 = scrollX_2 - Math.round(window.innerWidth / 2);
        let list = d2.results.length * 190;
        if((window.innerWidth - list) > x2){
            x2 = (window.innerWidth - list) -90;
        }
        setScrollX_2(x2);
    }


    return (
        <>
            <App />
            <div className="movie--tag"><h1>Top Filmes</h1></div> 
            <div className="top--movie" style={{
                        marginLeft: scrollX,
                        width: d.results.length * 150
                    }}>

                    <div className="row--left" onClick={handleLeft}>
                        left
                    </div>
                    <div className="row--right" onClick={handleRight}>
                        right
                    </div>
                {d.results.map((item, key) =>
                    
                    <div key={key} className="movie" >


                        <div key={key} className="row" >

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
            <div className="movie--tag"><h1>Em Breve</h1></div>                   
            <div className="top--movie" style={{
                        marginLeft: scrollX_2,
                        width: d2.results.length * 150
                    }} id="top--movie">

            <div className="row--left" onClick={handleLeft2}>
                        left
                    </div>
                    <div className="row--right" onClick={handleRight2}>
                        right
                    </div>
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
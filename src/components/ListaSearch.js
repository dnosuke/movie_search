import React from "react";
import { useNavigate } from "react-router-dom";
import './movie.css';

const ListaSearch = ({ data }) => {
    let navigate = useNavigate();
    return (

        <div className="container--movie">
            {data.results.map((item, key) =>
                <div key={key} className="movie">


                    <div key={key} className="row">

                        <div >
                            <div className="card border-info mb-3">
                                <div className="card-body">

                                    <div className="align-middle">
                                        <div className="img-fluid"><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                                        </div>
                                    </div>
                                    <div className="text--area">

                                    <div className="card-title">
                                        <h2>{item.title}</h2>
                                        <h6>Ano: {item.release_date}</h6>
                                        Nota: {item.vote_average}
                                    </div>

                                    <button className="btn btn-outline-info"
                                        onClick={() => {
                                            navigate("/filme", { state: { id: item.id }})
                                        }}
                                    >
                                        
                                            Mais Informações
                                         
                                    </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>


    )
}

export default ListaSearch;
import React from "react";
import './movie.css';

const ListaSearch = ({ data }) => {
    return (
        
                <div className="container--movie">
                    {data.results.map((item, key) =>
                        <div key={key} className="movie">


                            <div key={key} className="row">

                                <div className="align-middle">
                                    <div className="img-fluid">  <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                                    </div>
                                </div>
                                <div >
                                    <div className="card border-info mb-3">
                                        <div className="card-body">
                                            <div className="card-title"><h1>{item.title}</h1>
                                                <h5>Ano: {item.release_date}</h5>
                                                Nota: {item.vote_average}
                                            </div>
                                            <div className="card-text">{item.overview}</div>
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
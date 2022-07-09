import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles"

const ListaSearch = ({ data }) => {
    let navigate = useNavigate();
    return (

        <C.Container>

           
                {data.results.map((item, key) =>



                                    <div className="content">

                                            <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.original_title} />
                                            
                                        

                                                <div>
                                                <h2>{item.title}</h2>
                                                <h6>Ano: {item.release_date}</h6>
                                                Nota: {item.vote_average}
                                            

                                            <button className="btn btn-outline-info"
                                                onClick={() => {
                                                    navigate("/filme", { state: { id: item.id, title: item.title } })
                                                }}
                                            >

                                                Mais Informações

                                            </button>
                                            </div>

                                    </div>

                )}


        </C.Container>
    )
}

export default ListaSearch;
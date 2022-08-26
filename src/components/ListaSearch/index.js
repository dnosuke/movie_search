import React from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles"
import 'react-loading-skeleton/dist/skeleton.css'

const ListaSearch = ({ data }) => {
    let navigate = useNavigate();
    return (
        
        <C.Container>
                {data.results.map((item, key) =>


                    <div class="card" key={key}
                    onClick={() => {
                        navigate("/filme", { state: { id: item.id, title: item.title } })
                    }}
                    >
                    <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} className="card-img-top" alt={item.original_title} />
                    <div class="card-body">
                        <p class="card-text">{item.title}</p> 
                        <p>{item.release_date}</p>
                    </div>
                    </div>

                )}
        </C.Container>

    )
}

export default ListaSearch;
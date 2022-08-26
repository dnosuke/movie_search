import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as C from "./styles"

const SimilarMovie = ({ data }) => {

    let navigate = useNavigate();

    return (
        <C.Container>
            <h1>RECOMENDAÇÕES</h1>
            <div className="similar">
            {data.results.map((item, key) => {
                if (key < 5)
                return (<div className="content" key={key} onClick={() => {
                    navigate("filme", { state: { id: item.id, title: item.title } })
                }}>
                        <img  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                        <div className="des">
                            <h2>{item.title}</h2>
                        </div>
                    </div>)
            }
            )}
            </div>
        </C.Container>
    )
}

export default SimilarMovie;
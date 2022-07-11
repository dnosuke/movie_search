import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as C from "./styles"

const RightMenu = ({ data, title }) => {

    let navigate = useNavigate();
    
    useEffect(() => {
        
    }, [])
    
    const handleStar = (item) => {
        let star = []
        for (let i=0; i<item; i++)
            star.push(<i class="uil uil-favorite"></i>)
        return star.map((a) => 
            a
        )         
    }

    return (
        <C.Container>
            <h1>{title}</h1>
            {data.results.map((item, key) => {
                if (key < 5)
                return (<div className="content" key={key}>
                        <img onClick={() => {
                            navigate("/filme", { state: { id: item.id, title: item.title } })
                        }} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                        <div className="des">
                            <h2>{item.title}</h2>
                        {handleStar(parseInt(item.vote_average))}
                        </div>
                    </div>)
            }
            )}
        </C.Container>
    )
}

export default RightMenu;
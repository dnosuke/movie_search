import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as C from "./styles"

const RightMenu = ({ data }) => {
    let navigate = useNavigate();
    const [list, setList] = useState([]);

    useEffect(() => {

        let lista = []

        data.results.map((item, key) => {
            if (key < 5) {
                lista.push(item)
            }
        })

        setList(lista)

    }, [])

    return (
        <C.Container>
            <h1>Top Rated</h1>
            {list.map((item, key) =>

                <div className="content">
                    <img onClick={() => {
                        navigate("/filme", { state: { id: item.id, title: item.title } })
                    }} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />
                    <div>
                        <h2>{item.title}</h2>
                        <span>{item.vote_average}</span>
                    </div>
                </div>

            )}
        </C.Container>
    )
}

export default RightMenu;
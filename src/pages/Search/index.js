import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "../../components/Footer";
import ListaSearch from "../../components/ListaSearch";
import * as C from "./styles"
import Navbar from "../../components/Navbar";
import CardSkeleton from "../../components/MovieSearchCardSkeleton";

const Search = () => {

    const location = useLocation();
    const name = location.state.name
    const [isLoading, setIsLoading] = useState(true);
    const [dataMovie, setDataMovie] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
      });

      useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&query=${name}`;
    
        const fetchSearch = async () => {
          const { data } = await axios.get(url);
    
          setDataMovie(data);
          setIsLoading(false);
        };
    
        fetchSearch();
    
      }, [dataMovie, name]);

    return (
        <>
            <Navbar />
            <C.Container>
                {!isLoading? 
                <ListaSearch data={dataMovie} />:
                <div className="cardSkeleton">
                <CardSkeleton cards={8} />
                </div>
                }
            </C.Container>
            <Footer />
        </>
    )
}

export default Search;
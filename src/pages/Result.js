import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from 'axios';
import ListaSearch from "../components/ListaSearch";
import Navbar from "../components/Navbar";


function Result() {

    const location = useLocation();
    const name = location.state.name
    
    const [d, setData] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
      });

      useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&query=${name}`;
    
        const fetchSearch = async () => {
          const { data } = await axios.get(url);
    
          setData(data)
          
        };
    
        fetchSearch();
    
      }, [d]);

    return (

        <div>
          <Navbar />
            <div>
        <ListaSearch data={d} />
      </div>


        </div>

    )

}

export default Result;
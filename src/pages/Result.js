import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from 'axios';
import ListaSearch from "../components/ListaSearch";
import App from "../App";


const REACT_APP_TOKEN = '13d2c66212887a5ce321622117f2180a'


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
        const url = `https://api.themoviedb.org/3/search/movie?&api_key=${REACT_APP_TOKEN}&language=pt-BR&query=${name}`;
    
        const fetchSearch = async () => {
          const { data } = await axios.get(url);
    
          setData(data)
          
        };
    
        fetchSearch();
    
      }, [d]);

    return (

        <div>
          <App />
            <div>
        <ListaSearch data={d} />
      </div>


        </div>

    )

}

export default Result;
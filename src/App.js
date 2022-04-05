import React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import ListaSearch from './components/ListaSearch';
import './components/movie.css';


export default function App() {

  const [movie, setValue] = useState('');
  const [d, setData] = useState({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    let { filme } = data;
    setValue(filme)
  };
  const onError = (errors, e) => console.log(errors, e);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&query=.` + movie;

    const fetchSearch = async () => {
      const { data } = await axios.get(url);

      setData(data)
      
    };

    fetchSearch();

  }, [movie]);


  return (
    <>
      <div className='form'>
        <nav className="navbar">
          <div className="container-fluid">
            <a className="navbar-brand">Search Filmes</a>
            <form className='d-flex' onSubmit={handleSubmit(onSubmit, onError)}>
              <input className="form-control me-2" type='text' {...register("filme", { required: true })} placeholder="Nome do filme" />
              <input type="submit" value="Buscar" className="btn btn-outline-success" />
            </form>
          </div>
        </nav>
      </div>

      <div>
        <ListaSearch data={d} />
      </div>


    </>

  );
}

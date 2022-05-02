import React from 'react';
import { useForm } from "react-hook-form";
import './components/movie.css';
import { useNavigate } from 'react-router';


export default function App() {

  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    let { filme } = data;
    navigate("/home", { state: { name: filme }})
  };
  const onError = (errors, e) => console.log(errors, e);


  return (
    <>
      <div className='form'>
        <nav className="navbar">
          <div className="container-fluid">
            <a href='/' className="navbar-brand">Search Filmes</a>
            <form className='d-flex' onSubmit={handleSubmit(onSubmit, onError)}>
              <input className="form-control me-2" type='text' {...register("filme", { required: true })} placeholder="Nome do filme" />
              <input type="submit" value="Buscar" className="btn btn-outline-success" />
            </form>
          </div>
        </nav>         
      </div>
    </>

  );
}

import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import * as C from "./styles";


const Navbar = () => {

  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    let { filme } = data;
    navigate("/search", { state: { name: filme } })
  };
  const onError = (errors, e) => console.log(errors, e);


  return (
    <C.Container>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Search Filmes</a>
          <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item" hidden>
                <a class="nav-link" href="#">Settings</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Log out</a>
              </li>
            </ul>
            <form className='d-flex' role="search" onSubmit={handleSubmit(onSubmit, onError)}>
              <input className="form-control me-2" type="search" aria-label="Search" {...register("filme", { required: true })} placeholder="Nome do filme" />
              <input type="submit" value="Buscar" className="btn btn-outline-success" />
            </form>
          </div>
        </div>
      </nav>
    </C.Container>
  );
}

export default Navbar;
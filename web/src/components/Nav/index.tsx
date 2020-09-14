import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="container-fluid p-2 mb-5 bg-dark">
      <header className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/">Listar</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/forms">Criar</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Nav;
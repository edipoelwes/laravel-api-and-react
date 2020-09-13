import React from 'react';

const Nav = () => {
  return (
    <div className="container-fluid p-2 mb-5 bg-dark">
      <header className="container">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active text-white" href="teste">Listar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="teste">Criar</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Nav;
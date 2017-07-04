import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/"><img src="img/compass-logo.svg" alt="Logo" height={24} /></Link>
          <nav className="header__links links">
            <Link className="links__item" to="/сomplex">Купить</Link>
            <a className="links__item" href="#">Снять</a>
            <a className="links__item" href="#">Наши агенты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
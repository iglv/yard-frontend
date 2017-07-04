import React from 'react';

export default () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <a href="#"><img src="img/compass-logo.svg" alt="Logo" height={24} /></a>
          <nav className="header__links links">
            <a className="links__item" href="#">Купить</a>
            <a className="links__item" href="#">Снять</a>
            <a className="links__item" href="#">Наши агенты</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
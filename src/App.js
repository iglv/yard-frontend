import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      <div className="hero">
        <div className="container">
          <img src="img/compass-development-logo.svg" alt="Development" />
        </div>
      </div>
      <div className="container">
        <div className="headline">
          <h1 className="headline__title">Discover Our New Developments</h1>
          <p className="headline__description">Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</p>
          <a href="#" className="btn">Contact The Team</a>
        </div>
        <div className="cards">
          <a className="card" href="#">
            <div className="card__img">
              <img src="img/cards/bitmap.png" srcSet="img/cards/bitmap@2x.png 2x, img/cards/bitmap@3x.png 3x" />
            </div>
            <div className="card__info">
              <div className="card__subtitle">
                SOUTH BEACH, SAN FRANCISCO
              </div>
              <div className="card__title">
                764 Metropolitan Avenue
              </div>
              <p className="card__description">
                The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.
              </p>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__img">
              <img src="img/cards/bitmap.png" srcSet="img/cards/bitmap@2x.png 2x, img/cards/bitmap@3x.png 3x" />
            </div>
            <div className="card__info">
              <div className="card__subtitle">
                MIDTOWN EAST, MANHATTAN
              </div>
              <div className="card__title">
                100 East 53rd Street
              </div>
              <p className="card__description">
                One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.
              </p>
            </div>
          </a>
          <a className="card" href="#">
            <div className="card__img">
              <img src="img/cards/bitmap.png" srcSet="img/cards/bitmap@2x.png 2x, img/cards/bitmap@3x.png 3x" />
            </div>
            <div className="card__info">
              <div className="card__subtitle">
                NOLITA, MANHATTAN
              </div>
              <div className="card__title">
                152 Elizabeth
              </div>
              <p className="card__description">
                152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.
              </p>
            </div>
          </a>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-4">
              <h4 className="footer__heading">ООО «Ярд»</h4>
              <p className="footer__info">ОГРН 1175074002531</p>
              <p className="footer__info">ИНН 5036165365</p>
              <p className="footer__info">+7 (999) 821-14-88</p>
            </div>
            <div className="col-xs-2">
              <h4 className="footer__heading footer__heading--border">Жилые комплексы</h4>
              <nav>
                <a className="footer__link" href>ВТБ Арена Парк</a>
                <a className="footer__link" href>Садовые кварталы</a>
                <a className="footer__link" href>Резиденция Монэ</a>
                <a className="footer__link footer__link--arrow" href>Все ЖК Москвы <img src="img/combined-shape.svg" alt="Arrow" /></a>
              </nav>
            </div>
            <div className="col-xs-2">
              <h4 className="footer__heading footer__heading--border">Компания</h4>
              <nav>
                <a className="footer__link" href>Команда</a>
                <a className="footer__link" href>О компании</a>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-offset-4 col-xs-8">
              <p className="footer__text">Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;

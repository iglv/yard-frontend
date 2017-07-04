import React from 'react';

export default () => {
  return (
    <div class="container">
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
};

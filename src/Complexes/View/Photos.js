import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

function PhotosShow(props) {
  const content = props.photos.map((photo) =>
    <img src={photo.url} alt={photo.caption} />
  );

  return (
    <div className="complex-photos__wrap">
      {content}
    </div>
  );
}

const photoList = [
  {
    url: 'img/photos/1.jpg',
    caption: 'Фасад'
  },
  {
    url: 'img/photos/2.jpg',
    caption: 'Вид сверху'
  },
  {
    url: 'img/photos/4.jpg',
    caption: 'Вид сверху'
  },
  {
    url: 'img/photos/3.jpg',
    caption: 'Вид сзади'
  },
  {
    url: 'img/photos/2.jpg',
    caption: 'Вид охуенный'
  },
  {
    url: 'img/photos/1.jpg',
    caption: 'Вид просто'
  }
];

const total = photoList.length;

class PhotoGallery extends Component {
  render() {
    return (
      <div className="complex-photos">
        <PhotosShow photos={photoList} />
        <Grid>
          <a href="#" className="complex-photos__info">{total} фотография</a>
        </Grid>
      </div>
    );
  }
}

export default PhotoGallery;
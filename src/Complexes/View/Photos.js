import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

const PhotosWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
`;
const LinkTotal = styled(Link)`
  font-size: .6rem;
  font-weight: 300;
  line-height: 1.0;
  position: absolute;
  margin-top: -2.7rem;
  padding: .5rem 1rem;
  text-decoration: none;
  color: white;
  background-color: #00779a;
`;

const photoList = [
  {
    url: "img/photos/1.jpg",
    caption: "Фасад"
  },
  {
    url: "img/photos/2.jpg",
    caption: "Вид сверху"
  },
  {
    url: "img/photos/4.jpg",
    caption: "Вид сверху"
  },
  {
    url: "img/photos/3.jpg",
    caption: "Вид сзади"
  },
  {
    url: "img/photos/2.jpg",
    caption: "Вид охуенный"
  },
  {
    url: "img/photos/1.jpg",
    caption: "Вид просто"
  }
];

const total = photoList.length;

export default props =>
  <div>
    <PhotosWrap>
      {photoList.map(({ url, caption }, index) =>
        <img src={url} alt={caption} />
      )}
    </PhotosWrap>
    <Grid>
      <LinkTotal to="/">
        {total} фотография
      </LinkTotal>
    </Grid>
  </div>;

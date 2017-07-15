import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';

const Section = styled.section`
  overflow: hidden;
  overflow-x: scroll;
`;
const PhotosWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  justify-content: center;
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
  overflow: hidden;
`;

export default function (props) {
  const images = props.images || [];
  if (props.images) {
    return (
      <Section>
        <PhotosWrap>
          {images.map(({ id, caption }) => <img src={`https://yard-images.s3.amazonaws.com/${id}-512`} alt={caption} height={400} />)}
        </PhotosWrap>
        <Grid>
          <LinkTotal to="/">
            {images.length} фото
          </LinkTotal>
        </Grid>
      </Section>
    );
  }
  return null;
}

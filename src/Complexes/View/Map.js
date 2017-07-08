import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

const MapStyled = styled.div`
  margin-top: -10.3rem;
  padding-bottom: 3.5rem;
`;

const MapImg = styled.img`
  height: 306px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
`;

const List = styled.div`
  background: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
`;

const Item = styled.div`
  padding: 1.6rem 1.5rem;
  border-bottom: solid 1px #e0e0e1;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding-bottom: .8rem;
`;

const Desc = styled.p`
  margin: 0;
  color: #a9afb6;
`;



function Locations(props) {
  const content = props.list.map((photo) =>
    <Item>
      <Name>{photo.name}</Name>
      <Desc>{photo.desc}</Desc>
    </Item>
  );

  return (
    <List>
      {content}
    </List>
  );
}

const locationList = [
  {
    name: 'Красный Октябрь',
    desc: '4 минуты, 6 км'
  },
  {
    name: 'Красный Октябрь',
    desc: '24 минуты, 6 км'
  },
  {
    name: 'Красный Октябрь',
    desc: '74 минуты, 6 км'
  }
];

class Map extends Component {
  render() {
    return (
      <Grid>
        <MapStyled>
          <Row>
            <Col xs={6}>
              <MapImg src="/img/map@2x.png" />
            </Col>
            <Col xs={6}>
              <Locations list={locationList} />
            </Col>
          </Row>
        </MapStyled>
      </Grid>
    );
  }
}

export default Map;
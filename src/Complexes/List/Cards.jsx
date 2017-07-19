import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { get } from '../get';

const CardsStyled = styled.div`padding-bottom: 3rem;`;

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      complexes: [],
    };
  }

  componentDidMount() {
    get('complexes?filter[state]=public').then(({ items: complexes }) => {
      this.setState({ complexes });
    });
  }

  render() {
    return (
      <CardsStyled>
        {this.state.complexes.map(offer =>
          (<Card
            slug={offer.slug}
            id={offer.id}
            location={`${offer.location.subLocalityName}, ${offer.location
              .street} ${offer.location.house}`}
            title={offer.name}
            image={offer.images[0].id}
          />),
        )}
      </CardsStyled>
    );
  }
}
export default Cards;

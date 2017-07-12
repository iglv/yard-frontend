import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsStyled = styled.div`padding-bottom: 3rem;`;

class Cards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const that = this;
    const url = 'https://yard.moscow/api/v1/complexes?filter%5Bstate%5D=public';

    fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((data) => {
      that.setState({ items: data.items });
    });
  }
  // {post.images[0]}
  render() {
    // console.log(this.state.items);
    return (
      <CardsStyled>
        {this.state.items.map(post =>
          (<Card
            id={post.id}
            location={`${post.location.subLocalityName}, ${post.location.street} ${post.location.house}`}
            title={post.name}
            image={post.images[0].id}
          />),
        )}
      </CardsStyled>
    );
  }
}
export default Cards;

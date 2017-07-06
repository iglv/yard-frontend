import React, {Component} from 'react';
import styled from 'styled-components';

const BtnStyled = styled.a`
  font-weight: 300;
  display: inline-block;
  padding: .75rem 2rem;
  text-decoration: none;
  color: white;
  border-radius: 2px;
  background-color: #000;

&:hover,
&:active,
&:focus {
  background-color: #414141;
}
`;



class Btn extends Component {
  render() {
    return (
      <BtnStyled href={this.props.href}>{this.props.title}</BtnStyled>
    );
  }
}

export default Btn;

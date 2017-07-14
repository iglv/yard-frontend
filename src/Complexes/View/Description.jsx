import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`padding-top: 2.3rem;`;

const Title = styled.h2`
  font-family: 'Philosopher';
  font-size: 1.5rem;
  margin: 0;
`;

const Paragraph = styled.div`
  line-height: 1.6;
  margin: 0;
  padding-bottom: 1.5rem;
`;

export default props =>
  (<Wrapper>
    <Grid>
      <Row>
        <Col xs={2}>
          <Title>Описание</Title>
        </Col>
        <Col xs={10}>
          <article>
            <Paragraph>
              {props.children}
            </Paragraph>
          </article>
        </Col>
      </Row>
    </Grid>
  </Wrapper>);

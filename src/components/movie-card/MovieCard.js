import React from 'react'

import { Container, Row, Pr, StartButton } from './styles'

const startT = <span role='img' aria-label='star'>&#9734;</span>
const startF = <span role='img' aria-label='star'>&#127775;</span>

const MovieCard = ({ name, year, favorite, toggleFavorite }) => (
  <Container>
    <Row>
      <Pr>{ name }</Pr>
      <Pr>{ year }</Pr>
    </Row>
    <StartButton onClick={toggleFavorite}>
      { favorite ? startF: startT } 
    </StartButton>
  </Container>
)

export default MovieCard
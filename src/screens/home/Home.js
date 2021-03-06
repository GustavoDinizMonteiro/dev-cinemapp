import React, { Fragment } from 'react'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'

import Search from '../../components/search'
import { actions as favorites } from '../../actions/favorites'
import Movie from '../../components/movie-card'
import provider from '../../providers/OmdbProvide'
import { Container, Title, Label, Favorites } from './styles'

const isFavorite = (favorites, id) => favorites.hasOwnProperty(id)

class Home extends React.Component {
  state = { data: [], favorite: false }
  
  onSubmit = async(key) => {
    try {
      const { Search: data, Response } = await provider.listMovies(key)
      if (Response === 'True') {
        this.setState({ data })
      } else {
        this.setState({ data: [] })
        Swal.fire('Não foram encontrados resultados')
      }
    } catch (err) {
      console.warn(err);
    }
  }

  toggleFavorite = movie => {
    this.props.dispatch(favorites.toggleFavorite(movie))
  }

  render() {
    const { data, favorite } = this.state
    const { data: favoriteList } = this.props.favorites
    return (
      <Container>
        <Title>Cinema APP</Title>
        <Label>Bem vindo ao mundo espetacular do cinema</Label>
        <Favorites onClick={() => this.setState({ favorite: !favorite })}>
          { !favorite ? 'Favoritos': 'Buscar' }
        </Favorites>
        { favorite ? 
          (
            <Fragment>
              { Object.entries(favoriteList).map(([id, movie]) => 
                <Movie key={id} toggleFavorite={() => this.toggleFavorite(movie)}
                  favorite={isFavorite(favoriteList, movie.imdbID)} name={movie.Title} year={movie.Year}/>
              )}
            </Fragment>
          ): (
            <Fragment>
              <Search onSubmit={this.onSubmit}/>

              <Fragment>
                { data.map(movie => 
                  <Movie key={movie.imdbID} toggleFavorite={() => this.toggleFavorite(movie)}
                    favorite={isFavorite(favoriteList, movie.imdbID)} name={movie.Title} year={movie.Year}/>
                )}
              </Fragment>
            </Fragment>
          )
        }
      </Container>
    )
  }
}

const stateToProps = state => ({ favorites: state.favorites })
export default connect(stateToProps)(Home)
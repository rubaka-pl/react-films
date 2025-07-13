import React, { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const base = import.meta.env.VITE_OMDB_API_URL;
const key = import.meta.env.VITE_OMDB_API_KEY;

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
    type: 'all',
  };

  componentDidMount() {
    this.searchMovies('Gintama');
  }

  // теперь searchMovies только по строке
  searchMovies = (str) => {
    this.setState({ loading: true });
    fetch(
      `${base}/?apikey=${encodeURIComponent(key)}&s=${encodeURIComponent(str)}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({ movies: data.Search || [], loading: false })
      );
  };

  // обработчик смены фильтра
  handleTypeChange = (e) => {
    this.setState({ type: e.target.value });
  };

  render() {
    const { movies, type, loading } = this.state;

    // отфильтровываем фильмы по выбранному типу
    const visibleMovies = movies.filter((m) => {
      if (type === 'all') return true;
      return m.Type === type;
    });

    return (
      <main className='container content'>
        {/* Поиск по строке */}
        <Search searchMovies={this.searchMovies} />

        {/* Фильтр по типу */}
        <div className='filter-type'>
          <label htmlFor='type-select'>Filter by type:</label>
          <select
            id='type-select'
            value={type}
            onChange={this.handleTypeChange}
          >
            <option value='all'>All</option>
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
            <option value='episode'>Episode</option>
          </select>
        </div>

        {/* Рендерим либо список, либо прелоадер */}
        {loading ? <Preloader /> : <Movies movies={visibleMovies} />}
      </main>
    );
  }
}

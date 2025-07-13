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
    page: 1,
    totalResults: 0,
  };

  componentDidMount() {
    this.searchMovies('Gintama');
  }

  searchMovies = (query, type = 'all', page = 1) => {
    this.setState({ loading: true, query, type, page });

    const typeParam = type !== 'all' ? `&type=${type}` : '';

    fetch(
      `${base}/?apikey=${encodeURIComponent(key)}&s=${encodeURIComponent(
        query
      )}${typeParam}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.Search || [],
          totalResults: parseInt(data.totalResults, 9) || 0,
          loading: false,
        })
      )
      .catch(() =>
        this.setState({ movies: [], totalResults: 0, loading: false })
      );
  };

  handleTypeChange = (e) => {
    const newType = e.target.value;
    this.searchMovies(this.state.query, newType, 1);
  };

  render() {
    const { totalResults, type, page, loading } = this.state;
    const totalPages = Math.ceil(totalResults / 9);

    return (
      <main className='container content'>
        <Search
          query={this.state.query}
          type={type}
          searchMovies={(q) => this.searchMovies(q, type, 1)}
        />

        <div className='filter-type' style={{ margin: '1rem 0' }}>
          <span style={{ marginRight: '1rem' }}>Results: {totalResults}</span>

          <select
            value={type}
            onChange={(e) =>
              this.searchMovies(this.state.query, e.target.value, 1)
            }
          >
            <option value='all'>All</option>
            <option value='movie'>Movie</option>
            <option value='series'>Series</option>
            <option value='episode'>Episode</option>
          </select>
        </div>

        {loading ? <Preloader /> : <Movies movies={this.state.movies} />}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='pagination' style={{ marginTop: '2rem' }}>
            <button
              className='btn'
              disabled={page <= 1}
              onClick={() =>
                this.searchMovies(this.state.query, type, page - 1)
              }
            >
              Prev
            </button>

            <span style={{ margin: '0 1rem' }}>
              Page {page} of {totalPages}
            </span>

            <button
              className='btn'
              disabled={page >= totalPages}
              onClick={() =>
                this.searchMovies(this.state.query, type, page + 1)
              }
            >
              Next
            </button>
          </div>
        )}
      </main>
    );
  }
}

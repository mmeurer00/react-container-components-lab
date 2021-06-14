import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'qzWkmWjCYIa5zFGE0TOLO6q5V6W8BJSG';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        searchTerm: "",
        reviews: []
    }

    handleSearchInput = event => 
    this.setState({ searchTerm: event.target.value })

    handleSubmit = event => {
        event.preventDefault()

        fetch(URL.concat(this.state.searchTerm))
            .then(resp => resp.json())
            .then(resp => this.setState({ reviews: resp.results })); 
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                    <input
                    id="search-input"
                    type="text"
                    style={{width: 300}}
                    onChange={this.handleSearchInput} />
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>

        )
    }
}

export default SearchableMovieReviewsContainer
import React from 'react';
import styles from './style.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import results from '../../results';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: []
        }
        this.onSearchAgain = this.onSearchAgain.bind(this);
    }

    componentDidMount() {
        this.populateMovies();
    };

    populateMovies() {
        const movieArray = [...this.state.movies, ...results];
        this.setState({movies: movieArray});
    }

    onSearchAgain() {
        let emptyArray = [];
        this.props.helperFunc(emptyArray);
    }

    render() {
        // Map the movies array (of objects) into components for the render function to render
        let itemsMovies = this.props.movieData.map(item => {
            return <a href={item.show.url} description={item.show.name}><img src={item.show.image.medium} /></a>
        }); 
        return (
            <div className='results'>
            <div className='btn'>
            <Button onClick={this.onSearchAgain} id='getMovies'>Search Again</Button>
            </div>
            {itemsMovies}
            </div>
        )
    }
}

export default Results;
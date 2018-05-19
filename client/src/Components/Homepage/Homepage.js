import React from 'react';
import styles from './style.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { Form, Button, Grid } from 'semantic-ui-react'
import results from '../../results';

class SearchContainer extends React.Component {
    constructor() {
        super();
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.state = {
            query: "",
            movies: []
        }
        this.onSubmitQuery = this.onSubmitQuery.bind(this);
    }

    handleSearchInput(event) {
        this.setState({ query:event.target.value});
        console.log(event.target.value);
    }

    
    onSubmitQuery() {
        fetch('http://api.tvmaze.com/search/shows?q=' + this.state.query)
        .then(response => response.json())
        .then((parsedJSON) => {
            this.props.helperFunc(parsedJSON);
        })
        .catch(error => console.log('parsing failed', error))
    }


    render() {
        return (
            <div className="homepage">
            <br /><br />
            <Grid columns='equal'>
            <Grid.Column></Grid.Column>
            <Grid.Column width={12}>
            <Form>
                <Form.Field>
                    <input onChange={this.handleSearchInput} value={this.state.query} type="text" placeholder="Enter a Movie Title..." />
                </Form.Field>
            </Form>
            <br />
            <Button primary id="search-btn" onClick={this.onSubmitQuery}>Search</Button>
            </Grid.Column>
            <Grid.Column></Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default SearchContainer;
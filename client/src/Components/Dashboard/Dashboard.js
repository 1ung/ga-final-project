import React from 'react';
import styles from './style.css';
import { Route, Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import Nav from '../Nav/Nav';

class Dashboard extends React.Component {
    state = {
        movies: {
            title: '',
            rating: '',
            description: '',
            duration: '',
            release_date: '',
            image: ''
        },
        search: {
            isLoading: false,
            results: [],
            value: ''
        }
    };

    render() {
        return (
            <div className="dashboard">
            <Nav />
            <h1>Dashboard</h1>
                <Grid className="ui relaxed five column grid">
                    <div class="column">
                        <h2>Column 1</h2>
                    </div>
                    <div class="column">
                        <h2>Column 2</h2>
                    </div>
                    <div class="column">
                        <h2>Column 3</h2>
                    </div>
                    <div class="column">
                        <h2>Column 4</h2>
                    </div>
                    <div class="column">
                        <h2>Column 5</h2>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Dashboard;
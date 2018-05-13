import React from 'react';
import styles from './style.css';
import { Route, Link } from 'react-router-dom';
import { Menu, Search } from 'semantic-ui-react'
import Dashboard from '../Dashboard/Dashboard';

class Nav extends React.Component {
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
            <Menu className="ui secondary menu">
                <a className="item" href="/Dashboard"><h1>See你妈</h1></a>
                <a className="item" href="/User/Profile">Profile</a>
                <a className="item" href="/User/MyList">My list</a>
                <div className="right menu">
                <Search
                    input={{ fluid: false }}
                    placeholder='Enter a movie title'
                    className="search"
                />
                    <a class="item">Logout</a>
                </div>
            </Menu>
        )
    }
}

export default Nav;

import React from 'react';
import styles from './style.css';
import { Route, Link } from 'react-router-dom';
import { Grid, Card, Menu } from 'semantic-ui-react'
import Nav from '../Nav/Nav';

class MyList extends React.Component {
    render() {
        return (
            <div>
            <Nav />
            <Grid className="ui internally celled grid">
                <div className="row">
                    <div className="three wide column">
                    <Card className="ui card">
                        <div className="content">
                            <div class="header">Anonymous</div>
                            <div className="description">Enter short self-introduction here.</div>
                        </div>
                    </Card>
                    </div>
                    <div className="thirteen wide column">
                    <Menu className="ui fluid two item menu">
                        <a className="item">Movies to watch</a>
                        <a className="item">Seen movies</a>
                    </Menu>
                    </div>
                </div>
            </Grid>
            </div>
        )
    }
}

export default MyList;

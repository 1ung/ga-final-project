import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import MyList from './Components/MyList/MyList';
import SearchContainer from './Components/Homepage/Homepage';
import Nav from './Components/Nav/Nav';
import Results from './Components/Results/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.searchResults = this.searchResults.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };



  submit = (data) => {
    console.log(data);
  }

  searchResults = (data) => {
    this.setState({movies: data}, () => {if (this.state.movies.length > 0) {
      this.props.history.push('/movies');
    } else {
      this.props.history.push('/');
    }});
    console.log(data);
  }


  render() {
    return (
      <div className="ui container">
      <Nav />
      <Switch>
        <Route
          path='/movies'
          render={() => (
            <Results movieData={this.state.movies} helperFunc={this.searchResults} />
          )}
          />
          <Route path='/'
          render={() => (
            <SearchContainer helperFunc={this.searchResults} movieData={this.state.movies} />
          )}
          />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);


// {this.state.movies.length <= 0 && <SearchContainer helperFunc={this.searchResults} />}
// {this.state.movies.length > 0 && <Results movieData={this.state.movies} helperFunc={this.searchResults} />}
/* <Route path='/Register' exact component={Register} />
<Route path='/Dashboard' exact component={Dashboard} />
<Route path='/User/Profile' exact component={Profile} />
<Route path='/User/MyList' exact component={MyList} /> */
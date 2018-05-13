import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile/Profile';
import MyList from './Components/MyList/MyList';

class App extends React.Component {
  state = {
    response: ''
  };

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

  render() {
    return (
      <div className="ui container">
        <Route path='/' exact component={Login} />
        <Route path='/Register' exact component={Register} />
        <Route path='/Dashboard' exact component={Dashboard} />
        <Route path='/User/Profile' exact component={Profile} />
        <Route path='/User/MyList' exact component={MyList} />
      </div>
    );
  }
}

export default App;

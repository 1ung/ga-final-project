import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import styles from './style.css'

class Login extends React.Component {
  submit = (data) => {
    console.log(data);
  }

  render () {
    return (
      <div className="Login">
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}

export default Login
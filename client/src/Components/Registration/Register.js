import React from 'react';
import { Route, Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import styles from './style.css'

class Register extends React.Component {
  submit = (data) => {
    console.log(data);
  }

  render () {
    return (
      <div className="Login">
        <RegisterForm submit={this.submit} />
      </div>
    )
  }
}

export default Register
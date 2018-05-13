import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom';
import styles from './style.css';
import Validator from 'validator';
import InlineError from "../messages/InlineError";

class Register extends React.Component {
  state = {
    data: {
        email: '',
        password: '',
        username: ''
    },
    loading: false,
    errors: {}
  };

onChange = e => this.setState({ 
    data: { ...this.state.data, [e.target.name]: e.target.value }
});

onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
    this.props.submit(this.state.data);
    }
};

validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank!";
    if (!data.username) errors.username = "Please enter a username";
    return errors;
}

    render() {
        const { data, errors } = this.state
        return (
        <Form onSubmit={this.onSubmit} className="Register">
            <h1 class="branding">See你妈</h1>
            <div className="ui equal width grid">
              <div className="column"></div>
              <div className="five wide column">
                <div className="ui segment">
                  <Form.Field error={!!errors.email}>
                    <label htmlFor="email" className="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="example@example.com"
                      value={data.email}
                      onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                  </Form.Field>
                  <Form.Field error={!!errors.password}>
                    <label htmlFor="password" className="password">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      name="password" 
                      placeholder="Enter a strong password"
                      value={data.password}
                      onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                  </Form.Field>
                  <Form.Field error={!!errors.username}>
                    <label htmlFor="username" className="username">Username</label>
                    <input 
                      type="text" 
                      id="username" 
                      name="username" 
                      placeholder="Enter your desired name"
                      value={data.username}
                      onChange={this.onChange}
                    />
                    {errors.username && <InlineError text={errors.username} />}
                  </Form.Field>
                    <Button primary>Sign up</Button>
                    <br /><br />
                    <p>Already have an account?</p>
                    <Link to='/'>Log in</Link>
                </div>
              </div>
              <div className="column"></div>
            </div>
        </Form>
      );
    }
}

Register.propTypes = {
    submit: PropTypes.func.isRequired
};

export default Register;

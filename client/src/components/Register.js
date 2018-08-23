import React, { Component } from 'react';
import { Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../reducers/user';
import { setFlash } from '../reducers/flash';
import {
  Container,
} from 'semantic-ui-react'

class Register extends Component {
  state = { 
    email: '', 
    first_name: '',
    last_name: '',
    phone: '',
    admin: false,
    password: '', 
    passwordConfirmation: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, first_name, last_name, phone, admin, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser({ email, first_name, last_name, phone, admin, password, passwordConfirmation }, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  render() {
    const { email, first_name, last_name, phone, admin, password, passwordConfirmation } = this.state;

    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register Component</Header>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor='first_name'>First Name</label>
                  <input
                    id='first_name'
                    placeholder='First Name'
                    autoComplete="given-name"
                    required
                    value={first_name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor='last_name'>Last Name</label>
                  <input
                    id='last_name'
                    placeholder='Last Name'
                    autoComplete="family-name"
                    required
                    value={last_name}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <label htmlFor='email'>Email</label>
                  <input
                    id='email'
                    placeholder='Email'
                    autoComplete="email"
                    required
                    value={email}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor='phone'>Telephone</label>
                  <input
                    id='phone'
                    placeholder='Telephone'
                    autoComplete="tel-national"
                    required
                    value={phone}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  placeholder='Password'
                  type='password'
                  required
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='passwordConfirmation'>Password Confirmation</label>
                <input
                  id='passwordConfirmation'
                  placeholder='Password Confirmation'
                  type='password'
                  required
                  value={passwordConfirmation}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment basic textAlign='center'>
                <Button type='submit'>Submit</Button>
              </Segment>
            </Form>
          </Container>
      </Segment>
    );
  }
}

export default connect()(Register);
